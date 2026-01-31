// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      emailService: process.env.NUXT_PUBLIC_EMAIL_SERVICE,
      emailTemplate: process.env.NUXT_PUBLIC_EMAIL_TEMPLATE,
      emailKey: process.env.NUXT_PUBLIC_EMAIL_KEY,
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "ru",
    locales: [
      { code: "ru", iso: "ru-RU", file: "ru.json", name: "Русский" },
      { code: "uz", iso: "uz-UZ", file: "uz.json", name: "O'zbek" },
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
    ],
    langDir: "locales",
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts",
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Vezra Studio",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Nunito:wght@400;600;700&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
