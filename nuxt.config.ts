// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image",
  ],
  content: {
    highlight: {
      // theme: "github-light",
      // OR
      theme: {
        // default: "github-light",
        // dark: "github-dark",
        default: "min-light",
        dark: "min-dark",
        // sepia: "monokai",
      },
    },
  },
  colorMode: { classSuffix: "" },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
