// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    devtools: {enabled: true},
    modules: [
        '@nuxt/ui',
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@nuxt/image'
    ],
    tailwindcss: {
        // Options
    }
})