import { defineStore } from "pinia";

export const followingStore = defineStore("following", {
  state: () => ({
    following: [
      {
        src: "the_one.jpg",
        name: "Escanor",
        handle: "@the_one",
        time: "10 min",
        tweet: "who can beat me?",
        comments: "7,000",
        retweets: "163",
        like: "1,5k",
      },
      {
        src: "shadow_master.jpg",
        name: "Shadow Master",
        handle: "@me732",
        time: "45 min",
        tweet: "Should i build the dark mode",
        comments: "121",
        retweets: "02",
        like: "101",
      },
      {
        src: "dark.jpg",
        name: "the_hacker",
        handle: "@IOI",
        time: "1.1 hr",
        tweet: "should i hack nasa?",
        comments: "105k",
        retweets: "32",
        like: "103",
      },
      {
        src: "the_one.jpg",
        name: "Escanor",
        handle: "@the_one",
        time: "1 hr",
        tweet: "lion of proud ,Escanor",
        comments: "10k",
        retweets: "700k",
        like: "100,000",
      },
      {
        src: "shadow_master.jpg",
        name: "les_b-man",
        handle: "@jinchuruki",
        time: "1.1 hr",
        tweet: "yeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaahhhhhhhhhhhh",
        comments: "5,000",
        retweets: "32",
        like: "103",
      },
    ],
  }),
  getters: {
    getFollowings: (state) => state.following,
  },
});
