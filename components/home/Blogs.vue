<template>
  <section class="mb-12">
    <h2 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Recent Blog Posts</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="post in blogPosts" :key="post.id" class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
        <NuxtImg :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-medium text-gray-900 dark:text-white mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ post.excerpt }}</p>
          <NuxtLink :to="post.link" class="text-blue-600 dark:text-blue-400 hover:underline">Read more</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Scaling Your Go Application",
    excerpt: "Learn how to optimize your Go code for better performance and scalability.",
    image: "/blog/go-scaling.jpg",
    link: "/blog/scaling-go-applications"
  },
  {
    id: 2,
    title: "Building Microservices with Node.js",
    excerpt: "A comprehensive guide to creating robust microservices architecture using Node.js.",
    image: "/blog/nodejs-microservices.jpg",
    link: "/blog/nodejs-microservices"
  },
  // Add more blog posts as needed
]
</script>