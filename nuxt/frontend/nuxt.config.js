export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["assets/scss/main.scss"],

  // https://dev.to/paramo/using-sass-global-variables-in-nuxt-js-j0k
  styleResources: {
    scss: [
      "assets/scss/abstracts/_variable.scss",
      "assets/scss/abstracts/_mixins.scss",
    ],
  },

  axios: {
    // https://axios.nuxtjs.org/options/
    host: "localhost",
    port: "3001",
    prefix: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
