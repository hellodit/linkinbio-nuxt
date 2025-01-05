<template>
  <HomeLink
      v-for="link in links"
      :key="link.id"
      :title="link.title"
      :url="link.url"
      :is_featured="link.is_featured"
  />

</template>



<script setup lang="ts">
import {Link} from '~/types'

const client = useSupabaseClient()

const {data: links} = await useAsyncData<Link[]>('links', async () => {
  const {data, error} = await client
      .from('links')
      .select('*')
      .order('created_at', {ascending: false})
      .eq('is_published', true)

  if (error) {
    console.error('Error fetching links:', error)
    throw new Error('Failed to fetch links')
  }
  console.log(data)
  return data || []
})


</script>