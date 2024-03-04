<template>
  <div
    id="trending"
    class="lg:block hidden w-1/3 h-full border-l bg-white border-lighter px-6 pt-8 overflow-y-scroll relative">
    <div class="mb-6 relative bg-white">
      <input
        type="text"
        v-model="searchQuery"
        @input="handleInput"
        placeholder="Search..."
        class="px-4 py-2 rounded-full w-full text-sm bg-lighter focus:outline-none pl-10" />
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <i class="fa fa-search text-sm text-light"> </i>
      </div>
    </div>
    <div class="w-full rounded-lg bg-lightest" id="tendances">
      <div class="flex items-center justify-between p-3">
        <p class="text-lg font-bold">Trends for You</p>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <button
        v-for="trend in getTrends"
        :key="trend"
        class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
        <div>
          <p class="text-xs text-left leading-tight text-dark">
            {{ trend.top }}
          </p>
          <p class="font-bold text-left leading-tight text-dark">
            {{ trend.title }}
          </p>
          <p class="font-bold text-left leading-tight text-dark">
            {{ trend.bottom }}
          </p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button
        class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>

    <div class="w-full rounded-lg bg-lightest mt-6 my-4" id="suggestions">
      <div class="p-3">
        <p class="text-lg font-bold">Suggestions</p>
      </div>
      <button
        v-for="friend in getFriends"
        :key="friend"
        class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
        <img
          :src="`${friend.src}`"
          alt=""
          class="w-12 h-12 rounded-full border border-lighter" />
        <div class="ml-4">
          <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
          <p class="text-sm leading-tight">{{ friend.handle }}</p>
        </div>
        <button
          class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue focus:outline-none">
          Follow
        </button>
      </button>
      <button
        class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { trendStore } from "../store/trends";
import { friendStore } from "../store/friends";

export default {
  name: "RightBar",
  computed: {
    ...mapState(trendStore, ["getTrends"]),
    ...mapState(friendStore, ["getFriends"]),
  },
};
</script>
