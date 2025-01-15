<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-2 md:px-6">
    <div class="mx-auto max-w-md">

      <app-profile/>

      <slot/>

      <div class="text-center text-gray-500 dark:text-gray-400 mt-12">
        <p>Created with ❤️ by @codingtengahmalam</p>
      </div>
    </div>
  </main>
  <Analytics />
  <SpeedInsights/>
</template>

<script setup lang="ts">
import AppProfile from "~/components/AppProfile.vue";
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"


</script>