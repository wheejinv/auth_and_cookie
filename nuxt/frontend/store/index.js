import axios from "axios";

export const state = () => ({
  isLogin: false,
});

export const mutations = {
  setLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
};

export const actions = {
  async nuxtServerInit(context, { req }) {},

  async login(context, loginData) {
    console.log(context);
  },

  async logout(context) {},
};
