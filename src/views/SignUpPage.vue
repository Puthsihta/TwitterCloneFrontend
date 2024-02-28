<template>
  <Alert :msg="msg" :des="des" />
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="absolute inset-0 h-full w-full object-cover" />
      </aside>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div class="max-w-xl lg:max-w-3xl">
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to X
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>

          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
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
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-4"
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
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-4"
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
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-4"
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
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-4"
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
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-4" />
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="size-5 rounded-md border-gray-200 bg-white shadow-sm" />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a class="text-gray-700 underline cursor-pointer">
                  terms and conditions
                </a>
                and
                <a class="text-gray-700 underline cursor-pointer"
                  >privacy policy</a
                >.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <div
                type="submit"
                @click="handleSingUp"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 cursor-pointer">
                Create an account
              </div>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
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
import { mapActions, mapState } from "pinia";
import { userStore } from "../store/user";
import Alert from "../components/Alert.vue";

export default {
  components: { Alert },
  name: "SignUpPage",
  data() {
    return {
      warning: {
        msg: "",
        des: "",
      },
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    checkUser() {
      let isExit = false;
      this.getUsers.forEach((user) => {
        if (user.email == this.email) {
          isExit = true;
        }
        return isExit;
      });
    },
    handleSingUp() {
      // console.log("check user : ", this.checkUser());
      if (this.firstName.trim().length == 0) {
        alert("First Name is required");
        return;
      }
      if (this.lastName.trim().length == 0) {
        alert("Last Name is required");
        return;
      }
      if (this.lastName.trim().length == 0) {
        alert("Last Name is required");
        return;
      }
      if (this.email.trim().length == 0) {
        alert("Email is required");
        return;
      }
      if (this.password.trim().length == 0) {
        alert("Password is required");
        return;
      }
      if (this.passwordConfirmation.trim().length == 0) {
        alert("Confirm Password is required");
        return;
      }
      if (this.passwordConfirmation != this.password) {
        alert("Confirm Password is not match");
        return;
      }
      let isExit = false;
      this.getUsers.forEach((user) => {
        if (user.email == this.email) {
          isExit = true;
        }
        return isExit;
      });
      if (!isExit) {
        let user = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
        };
        this.storeUser(user);
        this.$router.push("/home");
      } else {
        alert("This Email is already exits");
      }
    },
    ...mapActions(userStore, ["storeUser"]),
  },
  computed: {
    ...mapState(userStore, ["getUsers"]),
  },
};
</script>
