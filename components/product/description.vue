<template>
  <div class="space-y-2 p-2">
    <div class="flex items-start justify-between gap-4">
      <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">
        {{ props.title }}
      </h1>
    </div>

    <div class="flex items-center space-x-2">
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
            <span
                v-if="props.discount_price > 0"
                class="text-sm text-gray-400 font-bold dark:text-gray-500"
            >
              {{ formatToRupiah(props.discount_price) }}
            </span>

      <span
          :class="{
                'line-through text-sm text-red-500 dark:text-red-400':
                  props.discount_price > 0,
                'text-sm text-gray-500 dark:text-gray-400':
                  props.discount_price === 0
              }"
      >
              {{ formatToRupiah(props.price) }}
            </span>
    </div>

    <div class="prose prose-sm dark:prose-invert">
      <MDC :value="props.description" tag="article"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import {formatToRupiah} from "~/utils/number";

const props = defineProps<{
  title: string,
  discount_price: number,
  price: number,
  description: string,
}>();
</script>