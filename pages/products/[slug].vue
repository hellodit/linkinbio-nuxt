<template>
  <div v-if="Product" class="rounded-xl bg-card dark:bg-gray-800 text-card-foreground dark:text-gray-300 shadow">
    <div class="p-0">
      <div class="relative aspect-video w-full overflow-hidden mb-3 shadow rounded-t-lg">
        <NuxtImg
            sizes="100vw"
            class="object-cover"
            :src="Product.image_url"
            alt="Product Image"
        />
      </div>

      <div class="space-y-2 p-2">
        <div class="flex items-start justify-between gap-4">
          <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">
            {{ Product.title }}
          </h1>
        </div>

        <div class="flex items-center space-x-2">
          <!-- Star Ratings -->
          <span
              v-for="n in 5"
              :key="n"
              class="text-yellow-500 dark:text-yellow-400 flex items-center"
          >
            <UIcon name="i-heroicons-star-solid" class="w-4 h-4" />
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            (100)
          </span>
        </div>



        <div class="prose prose-sm dark:prose-invert">
          <MDC :value="Product.description" tag="article" />
        </div>
      </div>
    </div>
  </div>

  <div v-if="Product" class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 w-full">
    <div class="max-w-6xl mx-auto w-full px-4 bg-white dark:bg-gray-900">
      <UButton
          :to="Product.checkout_url"
          color="primary"
          size="lg"
          target="_blank"
          block
      >
        Order Sekarang
      </UButton>
    </div>
  </div>
</template>


<script setup lang="ts">

import type {Product} from '~/types/product'
import {useRoute} from 'vue-router';
import {formatToRupiah} from "~/utils/number";

const route = useRoute();
const slug = route.params.slug;

definePageMeta({
  layout: 'detail'
});


const client = useSupabaseClient();

const {data: Product} = await useAsyncData<Product>('product', async () => {
  const {data, error} = await client
      .from('products')
      .select('*')
      .eq('is_published', true)
      .eq('slug', slug)
      .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product');
  }

  console.log(data);
  return data;
});
</script>