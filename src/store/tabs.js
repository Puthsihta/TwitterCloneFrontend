import { defineStore } from "pinia";

export const tapStore = defineStore("tap", {
  state: () => ({
    tabs: [
      { icon: "fas fa-home", title: "Home", id: "home" },
      { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
      { icon: "fas fa-bell", title: "Notifications", id: "notifications" },
      { icon: "fas fa-envelope", title: "Messages", id: "messages" },
      { icon: "fas fa-bookmark", title: "Bookmarks", id: "bookmarks" },
      { icon: "fas fa-clipboard-list", title: "Lists", id: "lists" },
      { icon: "fas fa-user", title: "Profile", id: "profile" },
      { icon: "fas fa-ellipsis-h", title: "More", id: "more" },
    ],
  }),
  getters: {
    getTabs: (state) => state.tabs,
  },
});
