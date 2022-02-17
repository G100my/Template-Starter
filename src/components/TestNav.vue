<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { routes } from '../router'

console.log('routes', routes)
const tmp: RouteRecordRaw[] = []

function findChildren(route: RouteRecordRaw) {
  if (route.children?.length) {
    route.children.forEach(child => {
      findChildren(child)
      if (child.name) tmp.push(child)
    })
  }
}

const allRoutes: Pick<RouteRecordRaw, 'name'>[] = routes
  .filter(route => {
    findChildren(route)
    if (route.name) return true
  })
  .concat(tmp)
  .sort()
  .map(item => ({ name: item.name }))
</script>
<template>
  <nav class="test_nav">
    <p>Test nav:</p>
    <div v-for="route in allRoutes" :key="route.name">
      <router-link :to="route">{{ route.name }}</router-link>
    </div>
  </nav>
</template>
<style>
.test_nav {
  display: flex;
  margin: 0 auto;
  width: fit-content;
}
.test_nav p {
  margin: 0;
}
.test_nav > div {
  margin-left: 1rem;
}
</style>
