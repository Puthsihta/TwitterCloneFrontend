import { defineStore } from "pinia";
import axios from "axios";

export const userStore = defineStore("user", {
  state: () => ({
    users: [],
    currentUser: {},
  }),
  getters: {
    getUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser,
  },
  actions: {
    storeUser(user) {
      this.users.push({ ...user });
    },
    storeCurrentUser(user) {
      this.currentUser = user;
    },
    async login(user) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/login", user)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async register(user) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", user)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
