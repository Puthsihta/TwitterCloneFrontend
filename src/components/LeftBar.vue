<template>
  <div
    id="leftbar"
    class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
    <div>
      <div>
        <button
          :key="tab"
          @click="id = tab.id"
          :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
            id === tab.id ? 'text-blue' : ''
          }`"
          v-for="tab in getTabs">
          <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i>
          <p class="text-lg font-semibold text-left hidden lg:block">
            {{ tab.title }}
          </p>
        </button>
      </div>
      <button
        class="text-white bg-blue rounded-full font-semibold focus:outline-none lg:h-auto lg:w-full p-3 hover:bg-darkblue">
        <p class="hidden lg:block">Post</p>
        <i class="fas fa-plus lg:hidden"></i>
      </button>
    </div>
    <!-- bottom profile -->
    <div class="lg:w-full relative">
      <button
        @click="appear = true"
        class="flex items-center w-full hover:bg-lightbue rounded-full focus:outline-none">
        <img
          src="dark.jpg"
          alt=""
          class="w-12 h-12 rounded-full border border-lighter" />
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-bold leading-tight">
            {{ getCurrentUser.username.toUpperCase() }}
          </p>
          <p class="text-sm text-left">
            <!-- {{ user_name.toLowerCase().trim() }} -->
            {{ getCurrentUser.username.toLowerCase() }}
          </p>
        </div>
        <!-- <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i> -->
      </button>
      <!-- popup modal -->
      <div
        v-if="appear === true"
        class="absolute bottom-0 left-0 w-64 round-lg shadow-xl border-lightest bg-white mb-16">
        <button
          @click="appear = false"
          class="p-3 flex items-center w-full hover:bg-lightest focus:outline-none">
          <img
            src="dark.jpg"
            alt=""
            class="w-12 h-12 rounded-full border border-lighter" />
          <div class="ml-4">
            <p class="text-sm font-bold leading-tight">Baed Savitar</p>
            <p class="text-sm leading-tight">@thinker732</p>
          </div>
          <i class="fas fa-check ml-auto text-black"></i>
        </button>
        <button
          @click="appear = false"
          class="w-full focus:outline-none text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
          Add an Account
        </button>
        <button
          @click="handleLogout"
          class="w-full focus:outline-none text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { userStore } from "../store/user";
import { tapStore } from "../store/tabs";

export default {
  name: "LeftBar",
  data() {
    return {
      appear: false,
      id: "home",
    };
  },
  methods: {
    handleLogout() {
      this.appear = false;
      this.$router.replace("/");
    },
  },
  computed: {
    ...mapState(userStore, ["getCurrentUser"]),
    ...mapState(tapStore, ["getTabs"]),
  },
  created() {
    console.log("create tweets : ", this.getTweets);
  },
};
</script>
