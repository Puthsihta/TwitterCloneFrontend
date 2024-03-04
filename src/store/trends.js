import { defineStore } from "pinia";

export const trendStore = defineStore("trend", {
  state: () => ({
    trending: [
      { top: "Trending in Cameroon", title: "#corona", bottom: "50k tweets" },
      { top: "Music", title: "k-pop", bottom: "21K Tweets" },
      { top: "Coding", title: "Js", bottom: "40k tweets" },
      { top: "Trending in Cameroon", title: "Amen", bottom: "144k tweets" },
    ],
  }),
  getters: {
    getTrends: (state) => state.trending,
  },
});
