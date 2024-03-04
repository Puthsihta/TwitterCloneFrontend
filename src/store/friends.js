import { defineStore } from "pinia";

export const friendStore = defineStore("friend", {
  state: () => ({
    friends: [
      { src: "vue.png", name: "Vue.js", handle: "@vuejs" },
      { src: "tailwind.jpg", name: "tailwindcss", handle: "@tailwindcss" },
      { src: "js.png", name: "JS", handle: "@javascript" },
    ],
  }),
  getters: {
    getFriends: (state) => state.friends,
  },
});
