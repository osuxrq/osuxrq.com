<!-- .vuepress/components/EasyWallet.vue -->
<script setup>
import { ref, computed } from 'vue'
import EasyCard from './EasyCard.vue'
import { getUserColour } from "../constants/userColor.js";

const targetDir = 'article/recommend'

// 1. 批量读取纯文本
const modules = import.meta.glob('../../article/recommend/*.md', { eager: true, query: '?raw' })

const parseMarkdown = (rawContent) => {
  let content = ''
  if (typeof rawContent === 'string') {
    content = rawContent
  } else if (rawContent && typeof rawContent.default === 'string') {
    content = rawContent.default
  } else if (rawContent) {
    try {
      content = String(rawContent.default || '')
    } catch (e) {
      content = ''
    }
  }

  if (!content) return { fm: {}, bodyHeading: '', extractedId: '', extractedName: '' }

  const fm = {}
  let bodyHeading = ''
  let extractedId = ''
  let extractedName = ''

  try {
    let lineCount = 0
    let cutoffIndex = content.length
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n') {
        lineCount++
        if (lineCount >= 50) {
          cutoffIndex = i + 1
          break
        }
      }
    }

    const headContent = content.slice(0, cutoffIndex)
    const lines = headContent.split(/\r?\n/)
    const maxLines = lines.length

    let inFrontmatter = false
    let frontmatterStarted = false

    for (let i = 0; i < maxLines; i++) {
      const line = lines[i]
      if (!line) continue
      const trimmed = line.trim()

      if (trimmed === '---') {
        if (!frontmatterStarted) {
          frontmatterStarted = true
          inFrontmatter = true
          continue
        } else if (inFrontmatter) {
          inFrontmatter = false
          continue
        }
      }

      if (inFrontmatter) {
        const colonIndex = line.indexOf(':')
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim().toLowerCase()
          let value = line.slice(colonIndex + 1).trim()
          value = value.replace(/^['"](.*)['"]$/, '$1')
          fm[key] = value
        }
      } else {
        if (!bodyHeading && trimmed.startsWith('#')) {
          bodyHeading = trimmed.replace(/^#+\s*/, '').replace(/\\/g, '')
        }
      }
    }

    const idMatch = headContent.match(/<Player\b[^>]*\bid=["']?(\d+)["']?/i)
    const nameMatch = headContent.match(/<Player\b[^>]*\bname=["']([^"']+)["']/i)

    if (idMatch) extractedId = idMatch[1]
    if (nameMatch) extractedName = nameMatch[1]

  } catch (e) {
    // 忽略异常
  }

  return { fm, bodyHeading, extractedId, extractedName }
}

// 2. 初始化组装数据（严格排除 README.md）
const posts = []
const entries = Object.entries(modules || {})

for (let i = 0; i < entries.length; i++) {
  const entry = entries[i]
  const path = entry[0]
  const moduleRaw = entry[1]

  if (path.toLowerCase().includes('readme')) {
    continue
  }

  const pathParts = path.split('/')
  const fileName = pathParts[pathParts.length - 1] || ''
  const slug = fileName.replace('.md', '').trim()

  const { fm, bodyHeading, extractedId, extractedName } = parseMarkdown(moduleRaw)

  const name = fm.name || extractedName || slug
  const title = fm.title || bodyHeading || '暂无标题...'
  const id = fm.id || extractedId || slug
  const color = fm.color || getUserColour(id)

  // 解析年份（支持 date: 2025-05-25 等格式）
  let year = '未分类'
  if (fm.date) {
    const dateObj = new Date(fm.date)
    if (!isNaN(dateObj.getTime())) {
      year = String(dateObj.getFullYear())
    } else {
      const yearMatch = String(fm.date).match(/\d{4}/)
      if (yearMatch) {
        year = yearMatch[0]
      }
    }
  }

  const cleanDir = targetDir.trim().replace(/^\/+|\/+$/g, '')
  const link = `/${cleanDir}/${slug}.html`

  posts.push({
    id,
    name,
    title,
    color,
    link,
    date: fm.date || '',
    year
  })
}

// 整体按日期从新到老（降序）排序
posts.sort((a, b) => {
  if (b.date && a.date) {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  }
  return b.year.localeCompare(a.year)
})

// 3. 按年份分组数据（降序排列：2026, 2025... 确保最新的在最上面）
const groupedPosts = computed(() => {
  const map = {}
  posts.forEach(post => {
    if (!map[post.year]) {
      map[post.year] = []
    }
    map[post.year].push(post)
  })

  const sortedYears = Object.keys(map).sort((a, b) => {
    if (a === '未分类') return 1
    if (b === '未分类') return -1
    return b.localeCompare(a) // 降序
  })

  return sortedYears.map(year => ({
    year,
    posts: map[year]
  }))
})

// 4. 年份独立状态管理（分页与折叠）
const pageSize = 12
const pageMap = ref({})     // 记录各年份当前页码
const expandMap = ref({})   // 记录各年份折叠状态

const getPage = (year) => pageMap.value[year] || 1
const setPage = (year, page) => { pageMap.value[year] = page }
const getTotalPages = (yearPosts) => Math.ceil(yearPosts.length / pageSize)

// 根据元素数量获取当前页展示的文章
const getPaginatedPosts = (year, yearPosts) => {
  if (yearPosts.length <= pageSize) {
    return yearPosts // 1-12个直接全部展示
  }
  const currentPage = getPage(year)
  const start = (currentPage - 1) * pageSize
  return yearPosts.slice(start, start + pageSize)
}

const isExpanded = (year, posts = []) => {
  if (expandMap.value[year] !== undefined) {
    return expandMap.value[year]
  }
  return posts.length <= pageSize // 超过 12 个默认收起 (false)，否则展开 (true)
}

// 切换年份折叠状态
const toggleExpand = (year, posts = []) => {
  expandMap.value[year] = !isExpanded(year, posts)
}

// 仿照 EasyCard 的逻辑，根据年份动态计算并叠上一层薄薄的颜色
const getYearBackground = (year) => {
  if (year === '未分类') {
    return 'var(--vp-c-bg-elv, #f9f9f9)'
  }
  // 通过 getUserColour 传入年份获取对应的 Hex 颜色
  const rawHex = getUserColour(String(year))
  let hex = rawHex.replace('#', '')
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }
  const num = parseInt(hex, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255

  // 这里的透明度可以设得比较薄（例如 0.12 或 0.15），并以 `--vp-c-bg-elv` 垫底
  return `linear-gradient(rgba(${r}, ${g}, ${b}, 0.12), rgba(${r}, ${g}, ${b}, 0.12)), var(--vp-c-bg-elv, #f9f9f9)`
}
</script>

<template>
  <div class="easy-wallet-container">
    <!-- 按年份循环渲染多个区块，2026 在最上面，并通过 :style 动态绑定背景色 -->
    <div
        v-for="group in groupedPosts"
        :key="group.year"
        class="year-section"
        :style="{ background: getYearBackground(group.year) }"
    >
      <!-- 年份头部：点击可折叠/展开 -->
      <div class="year-header" :class="{ 'collapsed': !isExpanded(group.year, group.posts) }" @click="toggleExpand(group.year, group.posts)">
        <div class="year-title">
          <span>{{ group.year }} 年 <span class="count-badge">({{ group.posts.length }}x)</span></span>
          <span class="toggle-text">{{ isExpanded(group.year, group.posts) ? '收起 ▲' : '展开 ▼' }}</span>
        </div>
      </div>

      <!-- 年份内部内容区块 -->
      <div v-show="isExpanded(group.year, group.posts)" class="year-content">
        <!-- 卡片网格：1-12个全量展示，>12个分片展示 -->
        <div class="card-grid">
          <EasyCard
              v-for="post in getPaginatedPosts(group.year, group.posts)"
              :key="post.id"
              :id="post.id"
              :name="post.name"
              :title="post.title"
              :color="post.color"
              :link="post.link"
              :date="post.date"
          />
        </div>

        <!-- 年份内部分页控制：仅在元素数量大于 12 时显示 -->
        <div v-if="group.posts.length > pageSize" class="pagination-controls" @click.stop>
          <button
              class="page-btn"
              :disabled="getPage(group.year) === 1"
              @click="setPage(group.year, getPage(group.year) - 1)"
          >
            上一页
          </button>

          <span class="page-info">
            第 {{ getPage(group.year) }} / {{ getTotalPages(group.posts) }} 页
          </span>

          <button
              class="page-btn"
              :disabled="getPage(group.year) >= getTotalPages(group.posts)"
              @click="setPage(group.year, getPage(group.year) + 1)"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.easy-wallet-container {
  padding: 20px 0;
}

.year-section {
  margin-bottom: 30px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  background-blend-mode: normal;
  transition: padding 0.2s ease, margin 0.2s ease;
}

/* 当年份区块内部内容收起时，自动调整 padding 和 margin */
.year-section:has(.year-header.collapsed) {
  padding-bottom: 20px;
  margin-bottom: 16px;
}

.year-header {
  cursor: pointer;
  border-bottom: 2px solid var(--vp-c-bg-alt, #eaeaea);
  padding-bottom: 10px;
  margin-bottom: 16px;
  user-select: none;
  /* 关键修改：去掉 all，只让 padding 和 margin 参与过渡，防止边框颜色闪烁 */
  transition: padding 0.2s ease, margin 0.2s ease;
}

/* 折叠状态下，去除 header 的下边距和下边框 */
.year-header.collapsed {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.year-header:hover {
  opacity: 0.8;
}

.year-title {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text, #2c3e50);
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.2;
}

.year-title .count-badge {
  font-size: 1rem;
  font-weight: normal;
  color: var(--vp-c-text, #666);
}

.toggle-text {
  font-size: 1rem;
  font-weight: normal;
  color: var( --vp-c-accent, #4ecdc4);
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.pagination-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px dashed var(--vp-c-border, #eaeaea);
}

.pagination-controls .page-btn {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-border, #ccc);
  background: var(--vp-c-bg, #fff);
  color: var(--vp-c-text, #333);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-controls .page-btn:hover:not(:disabled) {
  background: var(--vp-c-accent, #4ecdc4);
  color: var(--vp-c-bg, #fff);
  border-color: var(--vp-c-accent, #4ecdc4);
}

.pagination-controls .page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-controls .page-info {
  font-size: 14px;
  color: var(--vp-c-text-subtle, #666);
}
</style>