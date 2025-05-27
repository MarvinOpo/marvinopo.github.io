// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio/",
    buildAssetsDir: "assets",
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
