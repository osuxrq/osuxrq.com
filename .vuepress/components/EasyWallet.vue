<!-- .vuepress/components/EasyWallet.vue -->
<script setup>
import EasyCard from './EasyCard.vue'
import {getUserColour} from "../constants/userColor.js";

const targetDir = 'article/recommend'

// 1. 批量读取纯文本
const modules = import.meta.glob('../../article/recommend/*.md', { eager: true, query: '?raw' })

/**
 * 安全解析函数：只读取前 50 行，提取 Frontmatter、第一个 # 标题以及 <Player> 组件中的 id 和 name
 */
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
    const lines = content.split(/\r?\n/)
    let inFrontmatter = false
    let frontmatterStarted = false
    const maxLines = Math.min(lines.length, 50)

    // 截取前 50 行用于后续的正则匹配
    const headContent = lines.slice(0, maxLines).join('\n')

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

    // 在前 50 行内通过正则提取 <Player> 标签中的 id 和 name
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

  // 严格排除 README.md
  if (path.toLowerCase().endsWith('readme.md')) {
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

  const cleanDir = targetDir.trim().replace(/^\/+|\/+$/g, '')
  const link = `/${cleanDir}/${slug}.html`

  posts.push({
    id,
    name,
    title,
    color,
    link
  })
}
</script>

<template>
  <div class="card-grid">
    <EasyCard
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :name="post.name"
        :title="post.title"
        :color="post.color"
        :link="post.link"
    />
  </div>
</template>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
</style>