import { defineStore } from "pinia";

export const tweetStore = defineStore("tweets", {
  state: () => ({
    tweets: [{ content: "Hello twitter", time: "2min" }],
    tweet: { content: "" },
  }),
  getters: {
    getTweets: (state) => state.tweets,
  },
  actions: {
    addNewTweet() {
      if (this.tweet.content.trim().length == 0) {
        this.tweet.content = "";
        return;
      }
      let newTweet = {
        content: this.tweet.content,
        time: "1sec",
      };
      this.tweets.push(newTweet);
      this.tweet.content = "";
    },
  },
});
