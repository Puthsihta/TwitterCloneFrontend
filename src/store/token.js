import { defineStore } from "pinia";

export const tokenStore = defineStore("token", {
  state: () => ({
    token: "",
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    storeToken(token) {
      this.token = token;
    },
  },
});
