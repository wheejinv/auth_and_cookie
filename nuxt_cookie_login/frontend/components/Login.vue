<template>
  <div class="input">
    <form @submit.prevent="onSubmit">
      <div>
        <label for="id">아이디</label>
        <input type="text" id="id" v-model="id" placeholder="아이디">
      </div>

      <div>
        <label for="password">패스워드</label>
        <input type="password" id="password" v-model="password" placeholder="패스워드">
      </div>

      <div>
        <button type="submit">로그인</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

// https://www.inflearn.com/questions/345000

export default {
  data() {
    return {
      id: '',
      password: '',
    }
  },
  methods: {
    async onSubmit(e) {
      const json = {
        id: this.id,
        password: this.password
      }

      const response = await axios.post("http://localhost:3001/login", json, {
        withCredentials: true,
      });

      if (response.data.result === true) {
        this.$store.commit("setLogin", true)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  width: 300px;
  height: 200px;
  background: var(--color4);
  color: var(--color2);

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
