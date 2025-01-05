<script setup lang="ts">
import profileData from '~/assets/data/profile.json';

const profile = reactive(profileData);

const socialLinks = [
  {name: 'Instagram', href: 'https://instagram.com/codingtengahmalam', icon: 'simple-icons:instagram'},
  {name: 'YouTube', href: 'https://youtube.com/@codingtengahmalam', icon: 'simple-icons:youtube'},
  {name: 'Tiktok', href: 'https://youtube.com/@codingtengahmalam', icon: 'simple-icons:tiktok'},
]

</script>

<template>
  <div class="mb-3 flex items-start gap-3">
    <UAvatar
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
    />

    <div class="flex-1">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {{ profile.name }}
      </h1>
      <div
          class="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-300 mb-4">
        @{{ profile.username }}
      </div>
    </div>
  </div>
  <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    {{ profile.bio }}
  </p>
  <!-- Profile Section -->
  <div class="text-center mb-5">
    <!-- Social Links -->
    <div class="flex justify-start gap-4 mt-4">
      <NuxtLink
          v-for="social in socialLinks"
          :key="social.name"
          :to="social.href"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
      >
          <UIcon :name="social.icon" class="w-5 h-5" />
      </NuxtLink>
    </div>
  </div>

</template>

<style scoped>

</style>