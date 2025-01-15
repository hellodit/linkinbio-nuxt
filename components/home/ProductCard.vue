<template>
  <ULink
      :to="`/products/${props.slug}`">
    <div class="flex items-start p-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full max-w-sm mb-3">
      <!-- Image Section -->
      <div class="flex-shrink-0 w-20 h-20">
        <NuxtImg
            :src="props.image"
            alt="Product Thumbnail"
            class="object-cover w-full h-full rounded"
            style="aspect-ratio: 1 / 1"
        />
      </div>

      <!-- Content Section -->
      <div class="ml-4 flex-1">
        <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-300">
          {{ props.title }}
        </h3>
        <div class="flex items-center space-x-2 mt-1">
          <!-- Star Ratings -->
          <span
              v-for="n in 5"
              :key="n"
              class="text-yellow-500 dark:text-yellow-400 flex items-center"
          >
        <UIcon name="i-heroicons-star-solid" class="w-4 h-4"/>
      </span>
          <span class="text-xs text-gray-500 dark:text-gray-400">
        (100)
      </span>
        </div>

        <div class="flex flex-row gap-2">
          <span v-if="props.discount_price > 0" class="text-sm text-gray-400 font-bold dark:text-gray-500">
            {{ formatToRupiah(props.discount_price) }}
          </span>

          <span
              :class="{'line-through  text-sm text-red-500 dark:text-red-400': props.discount_price > 0, 'text-sm text-gray-500 dark:text-gray-400': props.discount_price === 0}">
            {{ formatToRupiah(props.price) }}
          </span>
        </div>
      </div>
    </div>

  </ULink>
</template>


<script setup lang="ts">
import {formatToRupiah} from "~/utils/number";

const props = defineProps<{
  title: string;
  image: string;
  price: number;
  discount_price: number;
  slug: string;
}>();


</script>