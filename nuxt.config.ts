// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/icon"],
  nitro: {
    preset: "static",
  },
  icon: {
    customCollections: [{ prefix: "my-icon", dir: "./assets/icons" }],
  },
  image: {
    dir: "assets/images",
    provider: "ipx",
  },
  app: {
    head: {
      title: "LOFT HALL",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Описание по умолчанию" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/my-favicon.ico" }],
    },
  },
});
