export default function({ $axios }) {
  // https://github.com/nuxt-community/axios-module/issues/168
  $axios.onRequest(config => {
    config.withCredentials = true

    return config
  })
}
