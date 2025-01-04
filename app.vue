<template>
  <default>
    <div class="mb-12 space-y-3">
      <h2 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Products</h2>
      <home-product-card />
    </div>

    <div class="mb-12 space-y-3">
      <h2 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Link from Content</h2>
      <home-link />
    </div>

  </default>
</template>
<script setup lang="ts">
import Default from "~/layouts/default.vue";
</script>