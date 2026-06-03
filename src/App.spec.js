import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it, vi } from 'vitest'
import App from './App.vue'
import RoadmapView from './views/RoadmapView.vue'
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

  it('shows the Kinkakuji themed hero on the home page', async () => {
    const router = createRouter({ history: createMemoryHistory(), routes })
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: { plugins: [router] },
    })

    expect(wrapper.text()).toContain('京都金色學習路線')
    expect(wrapper.text()).toContain('每週複習、練習題、錯題整理一起前進')
    expect(wrapper.get('figure[aria-label="金閣寺風格主視覺"] img').attributes('src')).toMatch(/\/kinkakuji-bg\.svg$/)
  })

  it('jumps to the weekly review panel after clicking the checklist button', async () => {
    const scrollIntoView = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoView

    const wrapper = mount(RoadmapView)
    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('重點複習')
    expect(wrapper.text()).toContain('練習題')
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
  })
})
