<template>
  <UCard class="mb-8">
    <template #header>
      <h2 class="text-xl font-semibold">What People Say</h2>
    </template>
    <UCarousel :items="testimonials" v-slot="{ item: testimonial }">
      <UCard>
        <p class="mb-4">{{ testimonial.content }}</p>
        <div class="flex items-center">
          <UAvatar :src="testimonial.avatar" :alt="testimonial.name" class="mr-4" />
          <div>
            <h4 class="font-medium">{{ testimonial.name }}</h4>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.position }}</p>
          </div>
        </div>
      </UCard>
    </UCarousel>
  </UCard>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    content: "Asdita's expertise in backend development helped us scale our application to handle millions of users. Highly recommended!",
    name: "Jane Doe",
    position: "CTO, TechCorp",
    avatar: "/avatars/jane-doe.jpg"
  },
  {
    id: 2,
    content: "Working with Asdita was a game-changer for our startup. His deep knowledge of Go and microservices architecture was invaluable.",
    name: "John Smith",
    position: "Founder, StartupX",
    avatar: "/avatars/john-smith.jpg"
  },
  {
    id: 3,
    content: "Asdita's ability to optimize our Node.js backend resulted in significant performance improvements. A true expert in his field!",
    name: "Emily Johnson",
    position: "Lead Developer, WebTech",
    avatar: "/avatars/emily-johnson.jpg"
  }
]
</script>