<template>
  <Alert v-if="msg && des" :msg="msg" :des="des" />
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        class="relative h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 hidden lg:block">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
          class="absolute inset-0 h-full w-2/3 object-contain" />
      </aside>

      <main
        class="flex items-center justify-center lg:col-span-7 xl:col-span-6 lg: mt-10">
        <div class="max-w-full lg:max-w-full">
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Twitter
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            Please fill in your infromation, to gt start with us
          </p>

          <form action="#" class="mt-8 grid grid-cols-2 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700">
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                v-model="firstName"
                class="mt-1 w-full rounded-full border-gray-200 bg-white text-sm text-gray-700 shadow-md p-4"
                placeholder="Jonh" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="LastName"
                class="block text-sm font-medium text-gray-700">
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                v-model="lastName"
                class="mt-1 w-full rounded-full border-gray-200 bg-white text-sm text-gray-700 shadow-md p-4"
                placeholder="Weak" />
            </div>

            <div class="col-span-6">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                v-model="email"
                class="mt-1 w-full rounded-full border-gray-200 bg-white text-sm text-gray-700 shadow-md p-4"
                placeholder="example@gmail.com" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                v-model="password"
                class="mt-1 w-full rounded-full border-gray-200 bg-white text-sm text-gray-700 shadow-md p-4"
                placeholder="******" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700">
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                placeholder="******"
                v-model="passwordConfirmation"
                class="mt-1 w-full rounded-full border-gray-200 bg-white text-sm text-gray-700 shadow-md p-4" />
            </div>

            <div class="col-span-6 sm:items-center sm:gap-4">
              <div
                @click="handleSingUp"
                class="shrink-0 text-center shadow-md rounded-full border border-blue-600 bg-blue px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue hover:border-blue focus:outline-none focus:ring active:text-blue-500 cursor-pointer">
                Sing up
              </div>

              <p class="mt-4 text-sm text-gray-500 lg:mt-4 text-center">
                Already have an account?
                <a
                  @click="$router.go(-1)"
                  class="text-gray-700 underline cursor-pointer"
                  >Log in</a
                >.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import { userStore } from "../store/user";
import Alert from "../components/Alert.vue";
import { tokenStore } from "../store/token";

export default {
  components: { Alert },
  name: "SignUpPage",
  data() {
    return {
      msg: "",
      des: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  updated() {
    setTimeout(() => {
      this.msg = "";
      this.des = "";
    }, 3000);
  },
  methods: {
    async handleSingUp() {
      // console.log("check user : ", this.checkUser());
      if (this.firstName.trim().length == 0) {
        this.msg = "First Name";
        this.des = "First Name is required, please enter your first name!";
        return;
      }
      if (this.lastName.trim().length == 0) {
        this.msg = "Last Name";
        this.des = "Last Name is required, please enter your last name!";
        return;
      }
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
      if (this.passwordConfirmation.trim().length == 0) {
        this.msg = "Confirm Password";
        this.des =
          "Confirm Password is required, please enter your confirm password!";
        return;
      }
      if (this.passwordConfirmation != this.password) {
        this.msg = "Incorrect Password";
        this.des = "Confirm Password is not match with the password!";
        return;
      }
      let user = {
        email: this.email,
        username: this.firstName + this.lastName,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        confirmedPassword: this.passwordConfirmation,
      };
      await this.register(user)
        .then((respone) => {
          if (respone.message) {
            this.storeToken(respone.token);
            this.storeCurrentUser(respone.data);
            this.$router.push("/home");
          } else {
            this.msg = "Invalid";
            this.des = respone.errors.msg;
          }
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    },
    ...mapActions(userStore, ["storeCurrentUser", "register"]),
    ...mapActions(tokenStore, ["storeToken"]),
  },
};
</script>
