<template>
  <section class="panel planner-panel">
    <div class="section-heading compact">
      <p class="eyebrow">讀書計畫計算機</p>
      <h2>依照每週時間安排 N2 準備</h2>
      <p>輸入你一週可以讀幾小時，網站會估算你要用幾週完成主要訓練。</p>
    </div>

    <label class="input-card">
      每週可讀日文時間
      <input v-model.number="weeklyHours" type="number" min="1" max="30" />
      <span>小時</span>
    </label>

    <div class="planner-result">
      <strong>建議週數：{{ estimatedWeeks }} 週</strong>
      <p>{{ planAdvice }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const weeklyHours = ref(8)
const totalHours = 120

const estimatedWeeks = computed(() => Math.max(6, Math.ceil(totalHours / Math.max(1, weeklyHours.value))))
const planAdvice = computed(() => {
  if (weeklyHours.value >= 12) return '時間很充足，可以每週安排一次模擬題和一次長文檢討。'
  if (weeklyHours.value >= 6) return '適合穩定推進。建議平日練文法，週末做閱讀和聽力。'
  return '時間偏少，先把錯題分類和每日短練習固定下來，不要一次排太多。'
})
</script>
