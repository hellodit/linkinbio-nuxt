<template>
  <div class="grid gap-2 grid-cols-2">
    <HomeProductCard
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :image="product.image_url"
        :price="product.price"
        :discountPrice="product.discount_price"
        :slug="product.slug"
    />
  </div>
</template>


<script setup lang="ts">

import {Product} from '~/types'

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
