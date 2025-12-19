// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },


  components:[
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@clerk/nuxt'

  ],

  runtimeConfig:{
    NUXT_CLERK_SECRET_KEY: process.env.NUXT_CLERK_SECRET_KEY
  }
})