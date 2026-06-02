<template>
  <article class="lesson-card">
    <div class="lesson-meta">
      <span>第 {{ item.week }} 週</span>
      <span>{{ item.level }}</span>
    </div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.goal }}</p>
    <ul>
      <li v-for="task in item.tasks" :key="task">{{ task }}</li>
    </ul>
    <button type="button" @click="$emit('select', item)">查看檢核重點</button>
  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>
