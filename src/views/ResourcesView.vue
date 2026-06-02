<template>
  <section class="page-hero">
    <p class="eyebrow">Resources</p>
    <h1>影片連結與延伸資源</h1>
    <p>網站本身提供學習順序，影片資源則用來補充說明和聽力練習。</p>
  </section>

  <section class="resource-grid">
    <article v-for="item in resources" :key="item.title" class="panel resource-card">
      <span>{{ item.type }}</span>
      <h2>{{ item.title }}</h2>
      <p>{{ item.note }}</p>
      <a :href="item.url" target="_blank" rel="noreferrer">開啟連結</a>
    </article>
  </section>

  <section class="panel two-column">
    <div>
      <p class="eyebrow">30 秒展示建議</p>
      <h2>報告時可以照這個順序介紹</h2>
      <p>先說目標讀者，再展示學習路線篩選、文法比較、互動測驗和讀書計畫計算機。</p>
    </div>
    <ol class="check-list numbered">
      <li>首頁：說明 N4 到 N2 的四階段。</li>
      <li>學習路線：搜尋「閱讀」並點開檢核重點。</li>
      <li>文法整理：切換 N2 文法並看例句。</li>
      <li>互動練習：回答一題，展示即時回饋。</li>
    </ol>
  </section>
</template>

<script setup>
import { resources } from '../data/curriculum.js'
</script>
