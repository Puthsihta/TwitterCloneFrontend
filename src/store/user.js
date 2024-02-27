import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    storeUser(user) {
      this.users.push({ ...user });
    },
  },
});
