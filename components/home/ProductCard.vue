<template>
  <ULink
      :to="`/products/${props.slug}`">
    <div class="p-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full mb-3">
      <!-- Image Section -->
      <div class="mb-3">
        <NuxtImg
            :src="props.image"
            alt="Product Thumbnail"
            class="object-cover w-full h-full rounded"
        />
      </div>

      <!-- Content Section -->
      <div class="">
        <h3 class="text-md font-bold text-gray-800 dark:text-white mb-1">
          {{ props.title }}
        </h3>

        <div class="flex flex-row gap-2 mb-2">
          <span v-if="props.discount_price > 0" class="text-sm text-gray-500 font-bold dark:text-white">
            {{ formatToRupiah(props.discount_price) }}
          </span>

          <span
              :class="{'line-through  text-sm text-red-500 dark:text-red-400': props.discount_price > 0, 'text-sm font-bold text-gray-500 dark:text-white': props.discount_price === 0}">
            {{ formatToRupiah(props.price) }}
          </span>
        </div>

        <p class="line-clamp-5 text-gray text-xs mb-2">
          {{ props.description }}
        </p>

        <div class="flex items-center space-x-2 mb-2">
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
  description: string;
  discount_price: number;
  slug: string;
}>();


</script>