<template>
  <div class="rounded-xl bg-card dark:bg-gray-800 text-card-foreground dark:text-gray-300 shadow">
    <template v-if="loading">
      <!-- Animasi Loading -->
      <div class="flex justify-center items-center h-60">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    </template>
    <template v-else-if="error">
      <!-- Pesan Error -->
      <div class="flex flex-col justify-center items-center h-60 space-y-4">
        <p class="text-gray-500 dark:text-gray-400 text-center">
          Terjadi kesalahan saat memuat data produk.
        </p>
        <UButton color="primary" @click="fetchProduct">
          Coba Lagi
        </UButton>
      </div>
    </template>
    <template v-else>
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

          <div class="flex flex-row gap-2">
            <span
                v-if="Product.discount_price > 0"
                class="text-sm text-gray-400 font-bold dark:text-gray-500"
            >
              {{ formatToRupiah(Product.discount_price) }}
            </span>

            <span
                :class="{
                'line-through text-sm text-red-500 dark:text-red-400':
                  Product.discount_price > 0,
                'text-sm text-gray-500 dark:text-gray-400':
                  Product.discountPrice === 0
              }"
            >
              {{ formatToRupiah(Product.price) }}
            </span>
          </div>

          <div class="prose prose-sm dark:prose-invert">
            <MDC :value="Product.description" tag="article" />
          </div>
        </div>
      </div>
    </template>
  </div>

  <div
      class="fixed bottom-0 left-0 right-0 p-2 bg-white dark:bg-gray-900 w-full border-t shadow"
      v-if="!loading && !error"
  >
    <div
        class="flex flex-row gap-2 max-w-sm mx-auto px-4 bg-white dark:bg-gray-900"
    >
      <UButton
          to="https://instagram.com/codingtengahmalam"
          size="lg"
          variant="outline"
          class="basis-[15%]"
          target="_blank"
      >
        <Icon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5" />
      </UButton>

      <UButton
          :to="Product.checkout_url"
          color="primary"
          size="lg"
          class="basis-[85%] justify-center"
          target="_blank"
      >
        Order Sekarang
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { formatToRupiah } from '~/utils/number';

const route = useRoute();
const slug = route.params.slug;

definePageMeta({
  layout: 'detail',
});

const client = useSupabaseClient();

// State Management
const loading = ref(true);
const error = ref(false);
const Product = ref<Product | null>(null);

// Function to Fetch Product
const fetchProduct = async () => {
  loading.value = true;
  error.value = false;
  try {
    const { data, error: fetchError } = await client
        .from('products')
        .select('*')
        .eq('is_published', true)
        .eq('slug', slug)
        .single();

    if (fetchError) {
      throw fetchError;
    }

    Product.value = data;
    useSeoMeta({
      title: data.title,
      description: data.title,
    });
  } catch (e) {
    console.error('Error fetching product:', e);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Fetch Product on Mount
fetchProduct();


</script>
