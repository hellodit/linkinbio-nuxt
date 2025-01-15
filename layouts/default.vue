<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 md:px-6">
    <div class="mx-auto max-w-md">
      <app-navbar/>
      <div class="max-w-4xl mx-auto px-4 py-8">
        <profile-header/>
        <slot/>
      </div>
    </div>
  </main>
  <Analytics />
  <SpeedInsights/>
</template>

<script setup lang="ts">
import AppNavbar from "~/components/AppHeader.vue";
import ProfileHeader from "~/components/ProfileHeader.vue";
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>