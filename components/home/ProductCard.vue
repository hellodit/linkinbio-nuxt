<template>
  <ULink :to="`/products/${props.slug}`">
    <div class="flex items-start p-4 bg-white shadow rounded-lg w-full max-w-sm mb-3">
      <!-- Image Section -->
      <div class="flex-shrink-0 w-20 h-20">
        <NuxtImg
            :src="props.image"
            alt="Product Thumbnail"
            class="object-cover w-full h-full rounded"
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
              class="text-yellow-500 flex items-center"
          >
            <UIcon name="i-heroicons-star-solid" class="w-4 h-4"/>
          </span>
                    <span class="text-xs text-gray-500">
                      (100)
                    </span>
        </div>

        <div class="mt-2">
          <span class="line-through text-xs text-gray-400">
            {{ formatToRupiah(props.discountPrice) }}
          </span>
          <span class="text-sm font-bold text-red-500">
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
  discountPrice: number;
  slug: string;
}>();


</script>