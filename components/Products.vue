<template>
  <div class="space-y-2">
    <HomeProductCard
        v-for="product in products"
        :description="product.description"
        :key="product.id"
        :title="product.title"
        :image="product.image_url"
        :price="product.price"
        :discount_price="product.discount_price"
        :slug="product.slug"
    />
  </div>



</template>


<script setup lang="ts">

import type  {Product} from '~/types/product'

const client = useSupabaseClient()

const {data: products} = await useAsyncData<Product[]>('products', async () => {
  const {data, error} = await client
      .from('products')
      .select('*')
      .order('created_at', {ascending: false})
      .eq('is_published', true)

  if (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }
  return data || []
})


</script>
