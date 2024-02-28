import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    users: [],
    currentUser: {},
  }),
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    storeUser(user) {
      this.users.push({ ...user });
    },
    storeCurrentUser(user) {
      this.currentUser = user;
    },
  },
});
