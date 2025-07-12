// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/icon"],
  icon: {
    customCollections: [{ prefix: "my-icon", dir: "./assets/icons" }],
  },
  image: {
    dir: "assets/images",
    provider: "ipx",
  },
});
