---
title: 名人堂
lang: zh-CN
---

# 名人堂

## 🚀 达到高阶群出群条件

<AlumniList/>

## ✨ 做出卓越贡献

<Card :users="contributors">
    <template #extra="{ user }">
      <span class="contribution"
            style="white-space: pre-line">{{ user.contribution }}</span>
    </template>
</Card>

::: tip
**尚未在名人堂找到自己？请[点此填写表单](https://docs.qq.com/form/page/DUnV4TlRPUUNTQ2FO)进行登记。**
:::

<script setup lang="ts">
import AlumniList from '@/AlumniList.vue'
import Card from '@/Card.vue'

const contributors = [
  {
    stuff: true,
    uid: "35628968",
    name: "SisypheOvO",
    contribution: "调整网站样式"
  },
  {
    stuff: true,
    uid: "13552636",
    name: "- E C -",
    contribution: "制作集锦"
  },
  {
    stuff: true,
    uid: "17268434",
    name: "PercyDan",
    contribution: "制作集锦"
  },
  {
    disable: true,
    uid: "19755783",
    name: "Vup",
    contribution: "曾作为qq bot\n现账号已封禁"
  }
];
</script>
