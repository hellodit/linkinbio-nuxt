import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        products: defineCollection({
            type: 'page',
            source: 'content/products/*.md',
        })
    },
})
