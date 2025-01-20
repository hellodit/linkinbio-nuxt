<template>
  <div class="relative aspect-video w-full overflow-hidden mb-3 shadow rounded-t-lg">
    <NuxtImg
        sizes="100vw"
        class="object-cover"
        :src="props.image_url"
        alt="Product Image"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  image_url: string;
}>();

</script>