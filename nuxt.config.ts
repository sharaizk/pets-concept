// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/styles/app.scss", "/assets/styles/modules/hero.scss"],
  app: {
    head: {
      title: "The Pets' Concept",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#090B0D",
        },
        { name: "msapplication-TileColor", content: "#090B0D" },
        {
          name: "msapplication-TileImage",
          content: "/images/favicon/ms-icon-144x144.png",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/images/favicon/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/images/favicon/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/images/favicon/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/images/favicon/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/images/favicon/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/images/favicon/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/images/favicon/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/images/favicon/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/favicon/apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/images/favicon/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon/images/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/images/favicon/images/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon/images/favicon-16x16.png",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "nuxt-icon"],
  googleFonts: {
    families: {
      Fredoka: [300, 400, 500, 600, 700],
      "Readex Pro": [300, 400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
  },
});
