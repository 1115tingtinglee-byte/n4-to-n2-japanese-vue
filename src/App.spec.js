import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'
import App from './App.vue'
import { routes } from './router.js'
import { grammarPatterns, quizQuestions, roadmap, resources } from './data/curriculum.js'

describe('N4 to N2 teaching site', () => {
  it('has enough teaching content for the final project', () => {
    expect(roadmap).toHaveLength(10)
    expect(roadmap.every((item) => item.reviewFocus.length >= 3)).toBe(true)
    expect(roadmap.every((item) => item.practiceQuestions.length >= 3)).toBe(true)
    expect(grammarPatterns.filter((item) => item.level === 'N2').length).toBeGreaterThanOrEqual(5)
    expect(quizQuestions).toHaveLength(5)
    expect(resources.some((item) => item.type === '影片')).toBe(true)
  })

  it('renders the Vue app shell and navigation', async () => {
    const router = createRouter({ history: createMemoryHistory(), routes })
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: { plugins: [router] },
    })

    expect(wrapper.text()).toContain('N4 → N2 日文升級教室')
    expect(wrapper.text()).toContain('學習路線')
    expect(wrapper.text()).toContain('互動練習')
  })
})
