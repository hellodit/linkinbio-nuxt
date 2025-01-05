<template>
  <ULink :to="`/products/${props.slug}`">
    <div class="rounded-xl border bg-card text-card-foreground shadow w-full max-w-sm overflow-hidden group">
      <div class="aspect-[4/3] relative">
        <NuxtImg
            :src="props.image"
            alt="Bundle Source Code RestFull API GoLang"
            class="object-cover w-full h-full"
        />
      </div>
      <div class="p-4">
        <h3 class="mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">
          {{ props.title }}
        </h3>

        <div class="mb-4 flex items-baseline gap-2">
          <span class="text-sm font-medium text-gray-900 dark:text-white">
            {{ formatToRupiah(props.price) }}
          </span>
          <span class="text-xs text-red-500 line-through dark:text-red-400">
            {{ formatToRupiah(props.discountPrice) }}
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