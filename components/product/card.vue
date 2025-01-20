<script lang="ts" setup>
const route = useRoute()
const { data: product } = await useAsyncData(route.path, () => {
  return queryCollection('products').path(route.path).first()
})
</script>

<template>
  <ContentRenderer v-if="product" :value="product" />
</template>