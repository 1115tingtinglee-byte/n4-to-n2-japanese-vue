<template>
  <section class="page-hero">
    <p class="eyebrow">Grammar Lab</p>
    <h1>容易混淆的 N3／N2 文法</h1>
    <p>這一頁不是把文法表全部塞滿，而是挑出從 N4 升 N2 時最常需要比較的句型。</p>
  </section>

  <section class="panel grammar-layout">
    <div class="grammar-sidebar">
      <label>
        文法搜尋
        <input v-model="keyword" type="search" placeholder="例如：否定、推測、依據" />
      </label>
      <div class="chip-row">
        <button type="button" :class="{ active: level === '全部' }" @click="level = '全部'">全部</button>
        <button type="button" :class="{ active: level === 'N3' }" @click="level = 'N3'">N3</button>
        <button type="button" :class="{ active: level === 'N2' }" @click="level = 'N2'">N2</button>
      </div>
      <button
        v-for="item in filteredPatterns"
        :key="item.pattern"
        type="button"
        :class="['grammar-button', { active: selected?.pattern === item.pattern }]"
        @click="selected = item"
      >
        {{ item.pattern }}
      </button>
    </div>

    <article class="grammar-detail" v-if="selected">
      <p class="eyebrow">{{ selected.level }} 文法</p>
      <h2>{{ selected.pattern }}</h2>
      <dl>
        <dt>意思</dt>
        <dd>{{ selected.meaning }}</dd>
        <dt>比較重點</dt>
        <dd>{{ selected.compare }}</dd>
        <dt>例句</dt>
        <dd lang="ja">{{ selected.example }}</dd>
      </dl>
      <p class="tip-box">{{ selected.tip }}</p>
    </article>
  </section>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { grammarPatterns } from '../data/curriculum.js'

const keyword = ref('')
const level = ref('全部')
const selected = ref(grammarPatterns[0])

const filteredPatterns = computed(() => {
  const text = keyword.value.trim().toLowerCase()
  return grammarPatterns.filter((item) => {
    const matchLevel = level.value === '全部' || item.level === level.value
    const haystack = `${item.pattern} ${item.meaning} ${item.compare} ${item.tip}`.toLowerCase()
    return matchLevel && (!text || haystack.includes(text))
  })
})

watchEffect(() => {
  if (!filteredPatterns.value.includes(selected.value)) {
    selected.value = filteredPatterns.value[0] || null
  }
})
</script>
