<template>
  <div id="tweets" class="w-full lg:w-1/2 h-full overflow-y-scroll">
    <div
      class="px-5 py-3 border-b-8 border-lighter flex sticky top-0 z-10 bg-white">
      <div class="flex-none">
        <img
          src="dark.jpg"
          class="flex-none w-12 h-12 rounded-full border border-lighter" />
      </div>
      <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
        <textarea
          v-model="tweet.content"
          placeholder="What's up?"
          class="mt-3 pb-3 w-full focus:outline-none pl-5" />
        <div class="flex items-center">
          <i class="text-lg text-blue mr-4 far fa-image"></i>
          <i class="text-lg text-blue mr-4 fas fa-film"></i>
          <i class="text-lg text-blue mr-4 fas fa-poll-h"></i>
          <i class="text-lg text-blue mr-4 far fa-smile"></i>
          <i class="text-lg text-blue mr-4 far fa-calendar-alt"></i>
        </div>
        <button
          type="submit"
          class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darblue focus:outline-none rounded-full absolute bottom-0 right-0">
          Post
        </button>
      </form>
    </div>
    <!-- own tweet -->
    <div class="flex flex-col-reverse">
      <div
        v-for="tweet in getTweets"
        :key="tweet"
        class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img src="dark.jpg" class="h-12 w-12 rounded-full flex-none" />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">
              {{ getCurrentUser.username }}
            </p>
            <p class="text-sm text-dark ml-2">
              @{{ getCurrentUser.username.toLowerCase() }}
            </p>
            <p class="text-sm text-dark ml-2">{{ tweet.time }}</p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{ tweet.content }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3 hover:text-blue-400"></i>
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3 hover:text-green-400"></i>
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i
                @click="like = true"
                :class="`fas fa-heart mr-3 hover:text-red-400 ${
                  like === true ? 'text-red-600' : ''
                }`"></i>
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- following tweet -->
    <div
      v-for="follow in getFollowings"
      :key="follow"
      class="w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none" />
      </div>
      <div class="w-full">
        <div class="flex items-center w-full">
          <p class="font-semibold">{{ follow.name }}</p>
          <p class="text-sm text-dark ml-2">{{ follow.handle }}</p>
          <p class="text-sm text-dark ml-2">{{ follow.time }}</p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class="py-2">
          {{ follow.tweet }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-comment mr-3 hover:text-blue-600"></i>
            <p>{{ follow.comments }}</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-retweet mr-3 hover:text-green-400"></i>
            <p>{{ follow.retweets }}</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-heart mr-3 hover:text-red-400"></i>
            <p>{{ follow.like }}</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-share-square mr-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { userStore } from "../store/user";
import { followingStore } from "../store/following";
import { tweetStore } from "../store/tweets";

export default {
  name: "MiddleBar",
  data() {
    return {
      id: "home",
      like: false,
    };
  },
  methods: {
    ...mapActions(tweetStore, ["addNewTweet"]),
  },
  computed: {
    ...mapState(userStore, ["getCurrentUser"]),
    ...mapState(followingStore, ["getFollowings"]),
    ...mapState(tweetStore, ["getTweets", "tweet"]),
  },
  created() {
    console.log("create tweets : ", this.getTweets);
  },
};
</script>
