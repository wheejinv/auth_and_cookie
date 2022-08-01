export const state = () => ({
  auth: false,
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
};

import axios from "axios";

export const actions = {
  // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
  async nuxtServerInit(context, { req }) {
    const { auth } = await this.$axios.$get("/auth");

    context.commit("setAuth", auth);
  },
};
