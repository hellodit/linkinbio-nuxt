<template>
  <div class="flex justify-center items-center h-full">
    <p class="text-red-500">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();
</script>

<style scoped>
/* Add any additional styling if needed */
</style>