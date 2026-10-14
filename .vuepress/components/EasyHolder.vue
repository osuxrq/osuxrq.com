<!-- .vuepress/components/EasyHolder.vue -->
<script setup>
import { ref, computed } from 'vue'
import EasyCard from './EasyCard.vue'
import { getUserColour } from "../constants/userColor.js";

// 目标目录
const targetDir = 'article/lastwords/users'

// 1. 批量读取纯文本
const modules = import.meta.glob('../../article/lastwords/users/*.md', { eager: true, query: '?raw' })

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

// 2. 初始化组装数据（严格排除 README.md 和 0.md）
const posts = []
const entries = Object.entries(modules || {})

for (let i = 0; i < entries.length; i++) {
  const entry = entries[i]
  const path = entry[0]
  const moduleRaw = entry[1]

  const lowerPath = path.toLowerCase()
  if (lowerPath.includes('readme')) {
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

  // 解析 type 并映射为对应中文名
  const rawType = (fm.type || '').trim().toLowerCase()
  let typeName = '常规'
  if (rawType === 'recommend') {
    typeName = '谱面推荐'
  } else if (rawType === 'suggest') {
    typeName = '技巧建议'
  } else if (rawType === 'simple') {
    typeName = '言简意赅'
  } else if (rawType === 'unknown') {
    typeName = '未知'
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
    typeName
  })
}

// 3. 在各个分类内部：整体按日期从新到老（降序）排序
posts.sort((a, b) => {
  if (b.date && a.date) {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  }
  return 0
})

// 4. 按自定义指定的 type 优先级分组与排序数据
const groupedPosts = computed(() => {
  const map = {}
  posts.forEach(post => {
    if (!map[post.typeName]) {
      map[post.typeName] = []
    }
    map[post.typeName].push(post)
  })

  // 自定义 type 排序优先级：谱面推荐 > 技巧建议 > 常规 > 言简意赅
  const typePriority = {
    '谱面推荐': 1,
    '技巧建议': 2,
    '常规': 10,
    '言简意赅': 21,
    '未知': 22
  }

  const sortedTypeNames = Object.keys(map).sort((a, b) => {
    const pA = typePriority[a] !== undefined ? typePriority[a] : 99
    const pB = typePriority[b] !== undefined ? typePriority[b] : 99
    return pA - pB
  })

  return sortedTypeNames.map(typeName => ({
    typeName,
    posts: map[typeName]
  }))
})

// 5. 分类独立状态管理（分页与折叠）
const pageSize = 12
const pageMap = ref({})     // 记录各分类当前页码
const expandMap = ref({})   // 记录各分类折叠状态

const getPage = (typeName) => pageMap.value[typeName] || 1
const setPage = (typeName, page) => { pageMap.value[typeName] = page }
const getTotalPages = (typePosts) => Math.ceil(typePosts.length / pageSize)

const getPaginatedPosts = (typeName, typePosts) => {
  if (typePosts.length <= pageSize) {
    return typePosts
  }
  const currentPage = getPage(typeName)
  const start = (currentPage - 1) * pageSize
  return typePosts.slice(start, start + pageSize)
}

const isExpanded = (typeName, posts = []) => {
  if (expandMap.value[typeName] !== undefined) {
    return expandMap.value[typeName]
  }
  return posts.length <= pageSize // 超过 12 个默认收起 (false)，否则展开 (true)
}

const toggleExpand = (typeName, posts = []) => {
    expandMap.value[typeName] = !isExpanded(typeName, posts)
  }

const getTypeBackground = (typeName) => {
  const rawHex = getUserColour(typeName)
  let hex = rawHex.replace('#', '')
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }
  const num = parseInt(hex, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255

  return `linear-gradient(rgba(${r}, ${g}, ${b}, 0.12), rgba(${r}, ${g}, ${b}, 0.12)), var(--vp-c-bg-elv, #f9f9f9)`
}
</script>

<template>
  <div class="easy-holder-container">
    <div
        v-for="group in groupedPosts"
        :key="group.typeName"
        class="type-section"
        :style="{ background: getTypeBackground(group.typeName) }"
    >
      <div class="type-header" :class="{ 'collapsed': !isExpanded(group.typeName, group.posts) }" @click="toggleExpand(group.typeName, group.posts)">
        <div class="type-title">
          <span>{{ group.typeName }} <span class="count-badge">({{ group.posts.length }}x)</span></span>
          <span class="toggle-text">{{ isExpanded(group.typeName, group.posts) ? '收起 ▲' : '展开 ▼' }}</span>
        </div>
      </div>

      <div v-show="isExpanded(group.typeName, group.posts)" class="type-content">
        <div class="card-grid">
          <EasyCard
              v-for="post in getPaginatedPosts(group.typeName, group.posts)"
              :key="post.id"
              :id="post.id"
              :name="post.name"
              :title="post.title"
              :color="post.color"
              :link="post.link"
              :date="post.date"
          />
        </div>

        <div v-if="group.posts.length > pageSize" class="pagination-controls" @click.stop>
          <button
              class="page-btn"
              :disabled="getPage(group.typeName) === 1"
              @click="setPage(group.typeName, getPage(group.typeName) - 1)"
          >
            上一页
          </button>

          <span class="page-info">
            第 {{ getPage(group.typeName) }} / {{ getTotalPages(group.posts) }} 页
          </span>

          <button
              class="page-btn"
              :disabled="getPage(group.typeName) >= getTotalPages(group.posts)"
              @click="setPage(group.typeName, getPage(group.typeName) + 1)"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.easy-holder-container {
  padding: 20px 0;
}

.type-section {
  margin-bottom: 30px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  background-blend-mode: normal;
  transition: padding 0.2s ease, margin 0.2s ease;
}

.type-section:has(.type-header.collapsed) {
  padding-bottom: 20px;
  margin-bottom: 16px;
}

.type-header {
  cursor: pointer;
  border-bottom: 2px solid var(--vp-c-bg-alt, #eaeaea);
  padding-bottom: 10px;
  margin-bottom: 16px;
  user-select: none;
  transition: padding 0.2s ease, margin 0.2s ease;
}

.type-header.collapsed {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.type-header:hover {
  opacity: 0.8;
}

.type-title {
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

.type-title .count-badge {
  font-size: 1rem;
  font-weight: normal;
  color: var(--vp-c-text, #666);
}

.toggle-text {
  font-size: 1rem;
  font-weight: normal;
  color: var(--vp-c-accent, #4ecdc4);
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