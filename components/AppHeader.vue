<script setup lang="ts">
import { ref } from 'vue';

const links = [
  [{
    label: 'Home',
  }, {
    label: 'About',
    to: '/components/horizontal-navigation'
  }, {
    label: 'Projects',
    to: '/components/command-palette'
  }]
];

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <UHorizontalNavigation :links="links" class="" />
    </div>
    <button @click="toggleDarkMode" class="p-2 bg-gray-200 dark:bg-gray-800 rounded">
      <UIcon v-if="!isDarkMode" name="i-heroicons-sun" class="w-5 h-5" />
      <UIcon v-else name="i-heroicons-moon" class="w-5 h-5" />
    </button>
  </div>
</template>