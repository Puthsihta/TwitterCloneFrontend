<template>
  <Alert v-if="msg && des" :msg="msg" :des="des" />
  <div
    class="h-screen flex flex-col justify-center bg-gradient-to-r from-bgprimary from-10% to-bgsecondary">
    <div class="mx-auto max-w-screen-xl px-12 sm:px-8 lg:px-8">
      <div class="mx-auto max-w-lg">
        <form
          action="#"
          class="mb-0 mt-6 space-y-4 rounded-xl md:rounded-lg p-4 shadow-lg sm:p-12 lg:p-8 flex flex-col items-center bg-white">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
            class="w-1/4 object-contain" />
          <div class="self-start">
            <p class="text-lg font-medium">
              {{ "Sign in " }}
            </p>
            <p class="text-lg font-medium">
              {{ "to your account with twitter".toLowerCase() }}
            </p>
          </div>
          <div class="self-start block w-full">
            <label for="email" class="sr-only">Email</label>
            <div class="relative">
              <input
                type="email"
                v-model="email"
                class="w-full rounded-full border-gray-200 p-4 pe-12 text-sm shadow-md"
                placeholder="example@gmail.com" />
              <span
                class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>

          <div class="self-start block w-full">
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
              <input
                v-model="password"
                v-if="showPassword"
                type="text"
                class="w-full rounded-full border-gray-200 p-4 pe-12 text-sm shadow-md"
                placeholder="*******" />
              <input
                v-model="password"
                v-else
                type="password"
                class="w-full rounded-full border-gray-200 p-4 pe-12 text-sm shadow-md"
                placeholder="*******" />
              <!-- <input v-if="showPassword" type="text" class="input" v-model="password" />
              <input v-else type="password" class="input" v-model="password"> -->
              <span
                @click="toggleShow"
                class="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                <svg
                  v-if="!showPassword"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  fill="none"
                  class="size-4 text-gray-400"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
                </svg>
                <!-- <i
                class="fas"
                :class="{
                  'fa-eye-slash': showPassword,
                  'fa-eye': !showPassword,
                }"></i> -->
              </span>
            </div>
          </div>

          <button
            type="submit"
            @click="navigatorHome"
            class="block w-full rounded-full bg-blue hover:bg-transparent px-5 py-3 text-sm font-medium text-white hover:text-blue border border-blue">
            Sign in
          </button>

          <p class="text-center text-sm text-gray-500">
            No account?
            <a
              @click="navigateSingUP"
              class="underline cursor-pointer text-blue"
              >Sign up</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { userStore } from "../store/user";
import { tokenStore } from "../store/token";
import Alert from "../components/Alert.vue";

export default {
  components: { Alert },
  name: "SignInPage",
  data() {
    return {
      msg: "",
      des: "",
      email: "",
      password: "",
      showPassword: false,
    };
  },
  updated() {
    setTimeout(() => {
      this.msg = "";
      this.des = "";
    }, 3000);
  },
  methods: {
    async navigateSingUP() {
      this.$router.push("/signup");
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async navigatorHome() {
      if (this.email.trim().length == 0) {
        this.msg = "Email";
        this.des = "Email is required, please enter your email!";
        return;
      }
      if (this.password.trim().length == 0) {
        this.msg = "Password";
        this.des = "Password is required, please enter your password!";
        return;
      }
      let user = {
        email: this.email,
        password: this.password,
      };
      await this.login(user)
        .then((respone) => {
          if (respone.message) {
            this.storeToken(respone.token);
            this.storeCurrentUser(respone.data);
            this.$router.push("/home");
          } else {
            this.msg = "Incorrect";
            this.des = respone.errors.msg;
          }
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    },
    ...mapActions(userStore, ["storeCurrentUser", "login"]),
    ...mapActions(tokenStore, ["storeToken"]),
  },
};
</script>
