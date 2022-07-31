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
import axios from 'axios';

export default {
  name: 'IndexPage',
  data() {
    return {
      text: 'hello default'
    }
  },
  methods: {
    eraseCookie(name) {
      document.cookie = name + "=; Max-Age=0";
    },
    logout() {
      this.eraseCookie('id');
      this.eraseCookie('password');
      this.eraseCookie('nick');
      this.$store.commit("setLogin", false);
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  async asyncData(context) {
    const {data} = await axios.get('http://localhost:3001/');

    return {
      text: data,
    }
  }
}
</script>
