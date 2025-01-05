<template>
  <section class="mb-12">
    <h2 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Featured Projects</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="project in projects" :key="project.id" class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
        <NuxtImg :src="project.image" :alt="project.name" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-medium text-gray-900 dark:text-white mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech" class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A scalable e-commerce solution built with Go and microservices architecture.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Go", "gRPC", "Docker", "Kubernetes", "PostgreSQL"]
  },
  {
    id: 2,
    name: "Real-time Chat Application",
    description: "A high-performance chat app using Node.js and WebSockets.",
    image: "/projects/chat-app.jpg",
    technologies: ["Node.js", "Socket.io", "Redis", "MongoDB", "React"]
  },
  // Add more projects as needed
]
</script>