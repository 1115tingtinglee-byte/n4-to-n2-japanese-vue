import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import RoadmapView from './views/RoadmapView.vue'
import GrammarView from './views/GrammarView.vue'
import PracticeView from './views/PracticeView.vue'
import ResourcesView from './views/ResourcesView.vue'

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/roadmap', name: 'roadmap', component: RoadmapView },
  { path: '/grammar', name: 'grammar', component: GrammarView },
  { path: '/practice', name: 'practice', component: PracticeView },
  { path: '/resources', name: 'resources', component: ResourcesView },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
