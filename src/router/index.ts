import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

export { routes }

export default createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
