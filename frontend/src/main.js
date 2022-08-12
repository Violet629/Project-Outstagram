import { createApp } from "vue";
import App from "./App.vue";
import store from "./store.js";
import router from "./router";

let app = createApp(App);
app.use(store, router).mount("#app");

// createApp(App).use(router, store).mount("#app");
