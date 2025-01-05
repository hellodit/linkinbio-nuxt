<template>
  <default>
    <div class="mb-12 space-y-3">
      <h2 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Products</h2>
      <products />
    </div>

    <div class="mb-12 space-y-3">
      <h2 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Link from Content</h2>
      <links />
    </div>

  </default>
</template>


<script setup lang="ts">
import Default from "~/layouts/default.vue";

useSeoMeta({
  title: 'Home - @codingtengahmalam',
  description: 'Sharing terkait per- Software Engineer -an, Belajar Coding, dan Kerja Remote. Rutinitas Coding tipis², Ngafe Santai, Ngopi.',
})
</script>