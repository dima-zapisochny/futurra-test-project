// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: false,
  css: ['~/public/styles/main.scss'],
  modules: ["@nuxt/fonts", 'nuxt-icon', "@nuxtjs/tailwindcss", "@nuxt/image"]
})