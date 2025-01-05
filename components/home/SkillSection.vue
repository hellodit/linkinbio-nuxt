<template>
  <section class="mb-12">
    <h2 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="skill in skills" :key="skill.name" class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <div class="flex items-center mb-2">
          <Icon :name="skill.icon" class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
          <h3 class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</h3>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div class="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Laravel', icon: 'simple-icons:laravel', level: 90 },
  { name: 'Go', icon: 'simple-icons:go', level: 85 },
  { name: 'Ruby', icon: 'simple-icons:ruby', level: 80 },
  { name: 'Node.js', icon: 'simple-icons:nodejs', level: 85 },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs', level: 75 },
  { name: 'Docker', icon: 'simple-icons:docker', level: 70 },
]
</script>