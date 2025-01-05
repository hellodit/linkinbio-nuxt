<template>
  <section class="mb-12">
    <h2 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
    <form @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
        <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
        <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
        <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>
      <UButton type="submit" color="primary" :loading="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </UButton>
    </form>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Implement your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    useToast().add({
      title: 'Success',
      description: 'Your message has been sent!',
      color: 'green'
    })
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    useToast().add({
      title: 'Error',
      description: 'Failed to send message. Please try again.',
      color: 'red'
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>