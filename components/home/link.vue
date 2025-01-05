<template>
  <NuxtLink
      :to="props.url"
      class="block">
    <div
        :class="`${props.is_featured ? 'animate-headShake border-2 border-blue-400' : ''} rounded-xl bg-card text-card-foreground shadow flex items-center justify-between p-4 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700`">
      {{ props.title }}
      <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-gray-700 dark:text-gray-300"/>
    </div>
  </NuxtLink>
</template>


<script setup lang="ts">
const props = defineProps<{
  title: string;
  url: string;
  is_featured: boolean;
}>();

</script>
