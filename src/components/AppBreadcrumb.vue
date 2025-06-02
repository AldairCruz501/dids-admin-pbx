<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router'

const breadcrumbs = ref()

const getBreadcrumbs = () => {
  return router.currentRoute.value.matched.map((route) => {
    return {
      active: route.path === router.currentRoute.value.fullPath,
      name: route.name,
      path: `${router.options.history.base}${route.path}`,
    }
  })
}

router.afterEach(() => {
  breadcrumbs.value = getBreadcrumbs()
})

onMounted(() => {
  breadcrumbs.value = getBreadcrumbs()
})
</script>

<template>
  <CBreadcrumb class="my-0">
    <CBreadcrumbItem
      v-for="item in breadcrumbs"
      :key="item"
      :href="item.active ? '' : item.path"
      :active="item.active"
    >
      {{ item.name }}
    </CBreadcrumbItem>
  </CBreadcrumb>
</template>

<style>
.breadcrumb-item a {
  color: #02a6a3 !important;
}

.breadcrumb-item a:hover {
  color: #027373!important;
}
</style>
