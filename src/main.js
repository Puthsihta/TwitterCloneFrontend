import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./route";
import pinia from "./pinia.js";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
