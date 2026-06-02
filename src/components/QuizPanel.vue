<template>
  <section class="panel quiz-panel">
    <div class="section-heading compact">
      <p class="eyebrow">互動小測驗</p>
      <h2>先判斷語氣，再選句型</h2>
      <p>這個練習不是考背誦，而是訓練你看到上下文時，先判斷句子的功能。</p>
    </div>

    <div class="quiz-question" v-for="(item, index) in questions" :key="item.question">
      <h3>{{ index + 1 }}. {{ item.question }}</h3>
      <div class="option-row">
        <button
          v-for="option in item.options"
          :key="option"
          type="button"
          :class="['option-button', { selected: answers[index] === option }]"
          @click="answers[index] = option"
        >
          {{ option }}
        </button>
      </div>
      <p v-if="answers[index]" class="feedback" :class="answers[index] === item.answer ? 'right' : 'wrong'">
        {{ answers[index] === item.answer ? '答對：' : '再想想：' }}{{ item.reason }}
      </p>
    </div>

    <div class="score-box">
      <strong>目前得分：{{ score }} / {{ questions.length }}</strong>
      <span v-if="isComplete">{{ scoreMessage }}</span>
      <span v-else>還有 {{ questions.length - answeredCount }} 題沒作答。</span>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
})

const answers = ref({})

const answeredCount = computed(() => Object.keys(answers.value).length)
const score = computed(() => props.questions.filter((item, index) => answers.value[index] === item.answer).length)
const isComplete = computed(() => answeredCount.value === props.questions.length)
const scoreMessage = computed(() => {
  if (score.value === props.questions.length) return '很穩，接下來可以進入 N2 長文。'
  if (score.value >= props.questions.length - 1) return '觀念大致正確，錯題建議重寫例句。'
  return '先回文法整理頁，把相似句型再比較一次。'
})
</script>
