<template>
  <section class="page-hero">
    <p class="eyebrow">Roadmap</p>
    <h1>10 週學習路線</h1>
    <p>用 v-for 呈現每週任務，用搜尋與級數篩選找出目前最需要的內容。</p>
  </section>

  <section class="toolbar panel">
    <label>
      搜尋任務
      <input v-model="keyword" type="search" placeholder="例如：閱讀、聽力、文法" />
    </label>
    <label>
      篩選級數
      <select v-model="levelFilter">
        <option value="全部">全部</option>
        <option value="N4→N3">N4→N3</option>
        <option value="N3">N3</option>
        <option value="N3→N2">N3→N2</option>
        <option value="N2">N2</option>
      </select>
    </label>
    <p>符合條件：{{ filteredRoadmap.length }} 週</p>
  </section>

  <section class="lesson-grid">
    <LessonCard v-for="item in filteredRoadmap" :key="item.week" :item="item" @select="selectWeek" />
  </section>

  <section v-if="selected" ref="detailPanel" class="panel detail-panel" tabindex="-1">
    <div class="detail-header">
      <div>
        <p class="eyebrow">第 {{ selected.week }} 週檢核</p>
        <h2>{{ selected.title }}</h2>
        <p>{{ selected.checkpoint }}</p>
      </div>
      <a :href="selected.video" target="_blank" rel="noreferrer">觀看相關影片搜尋結果</a>
    </div>

    <div class="review-grid" aria-label="每週查看檢核重點">
      <article class="review-card">
        <h3>重點複習</h3>
        <ul class="check-list">
          <li v-for="focus in selected.reviewFocus" :key="focus">{{ focus }}</li>
        </ul>
      </article>
      <article class="review-card">
        <h3>練習題</h3>
        <ol class="check-list numbered">
          <li v-for="question in selected.practiceQuestions" :key="question">{{ question }}</li>
        </ol>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import LessonCard from '../components/LessonCard.vue'
import { roadmap } from '../data/curriculum.js'

const keyword = ref('')
const levelFilter = ref('全部')
const selected = ref(null)
const detailPanel = ref(null)

const selectWeek = async (item) => {
  selected.value = item
  await nextTick()
  detailPanel.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  detailPanel.value?.focus({ preventScroll: true })
}

const filteredRoadmap = computed(() => {
  const text = keyword.value.trim().toLowerCase()
  return roadmap.filter((item) => {
    const matchLevel = levelFilter.value === '全部' || item.level === levelFilter.value
    const reviewFocus = item.reviewFocus?.join(' ') ?? ''
    const practiceQuestions = item.practiceQuestions?.join(' ') ?? ''
    const haystack = `${item.title} ${item.goal} ${item.tasks.join(' ')} ${item.phase} ${reviewFocus} ${practiceQuestions}`.toLowerCase()
    const matchKeyword = !text || haystack.includes(text)
    return matchLevel && matchKeyword
  })
})
</script>
