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

        <!-- Image Section -->
        <Cover :image_url="Product.image_url"/>

        <!-- product detail -->
        <Description
            :title="Product.title"
            :discount_price="Product.discount_price"
            :price="Product.price"
            :description="Product.description"
        />

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
        <Icon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5"/>
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
import type {Product} from '~/types/product';
import {useRoute} from 'vue-router';
import {ref} from 'vue';

import Cover from "~/components/product/cover.vue";
import Description from "~/components/product/description.vue";

const route = useRoute();
const slug = route.params.slug;

definePageMeta({
  layout: 'detail',
});

const client = useSupabaseClient();

useSeoMeta({
  title: 'Product Detail',
  description: 'Product desc',
});


// State Management
const loading = ref(true);
const error = ref(false);
const Product = ref<Product | null>(null);

// Function to Fetch Product
const fetchProduct = async () => {
  loading.value = true;
  error.value = false;
  try {
    const {data, error: fetchError} = await client
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
      title: data?.title,
      description: data?.title,
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
