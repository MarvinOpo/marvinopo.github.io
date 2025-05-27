// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/portfolio/",
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "vuetify-nuxt-module",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  vuetify: {
    vuetifyOptions: "./vuetify.options.js",
  },
});
