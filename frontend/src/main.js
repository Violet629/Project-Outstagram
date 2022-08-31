import { createApp } from "vue";
import App from "./App.vue";
import store from "./store.js";
import router from "./router";
import $ from "jquery";

let app = createApp(App);
// app.use(store, router).mount("#app");

// createApp(App).use(router).mount("#app");
app.use($);
app.use(store);
app.use(router);
app.mount("#app");
