import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/n4-to-n2-japanese-vue/',
  test: {
    environment: 'jsdom',
    globals: true,
    pool: 'vmThreads',
  },
})
