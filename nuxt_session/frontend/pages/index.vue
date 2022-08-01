<template>
  <div id='app'>
    <Tutorial :text="text"/>
    <Login v-if="isLogin === false" />
    <div v-else>
      <p>로그인 상태입니다.</p>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      text: 'hello default',
    }
  },
  methods: {
    eraseCookie(name) {
      document.cookie = name + "=; Max-Age=0";
    },
    async logout() {
      this.$store.commit('setAuth', false)
      await this.$axios.get('/logout');

      await this.$nuxt.refresh()
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.auth
    }
  },
  async asyncData(context) {
    const {data} = await context.$axios.get('/');

    return {
      text: data,
    }
  }
}
</script>
