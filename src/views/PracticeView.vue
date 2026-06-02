<template>
  <section class="page-hero">
    <p class="eyebrow">Practice</p>
    <h1>互動練習與讀書計畫</h1>
    <p>這一頁使用 ref 和 computed 讓讀者可以回答題目、看到即時分數，也能估算準備週數。</p>
  </section>

  <div class="practice-grid">
    <QuizPanel :questions="quizQuestions" />
    <StudyPlanner />
  </div>

  <section class="panel reflection-panel">
    <img src="../assets/study-loop.svg" alt="輸入、練習、回饋、調整的學習循環插圖" />
    <div>
      <p class="eyebrow">學習提醒</p>
      <h2>錯題不是失敗，是調整路線的資料</h2>
      <p>
        如果測驗錯很多，不代表不能考 N2。比較有用的做法是把錯題分成「文法意思錯」、
        「語氣判斷錯」和「接續錯」。下一週只針對最多的那一類加強，進步會比較明顯。
      </p>
    </div>
  </section>
</template>

<script setup>
import QuizPanel from '../components/QuizPanel.vue'
import StudyPlanner from '../components/StudyPlanner.vue'
import { quizQuestions } from '../data/curriculum.js'
</script>
