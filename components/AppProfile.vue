<template>
  <div class="rounded-xl bg-card dark:bg-gray-800 text-card-foreground dark:text-gray-300 shadow mb-2 hover:bg-gray-100 dark:hover:bg-gray-700">
    <a class="mb-3" href="/">
      <div class="flex items-center p-2 rounded-lg">
        <div class="flex-shrink-0">
          <span
              class="relative flex shrink-0 overflow-hidden h-10 w-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600">
            <UAvatar
                class="aspect-square h-full w-full"
                size="xl"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
            />
          </span>
        </div>

        <div class="ml-4">
          <p class="text-sm font-bold text-gray-900 dark:text-gray-100">{{ profile.name }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">@{{ profile.username }}</p>
        </div>
      </div>
    </a>
  </div>
</template>


<script setup lang="ts">
import profileData from '~/assets/data/profile.json';

const profile = reactive(profileData);
</script>