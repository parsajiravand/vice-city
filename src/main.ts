import { createApp } from "vue";
import router from "./router";

import "./style.css";
import App from "./App.vue";
import "./styles/custom-bootstrap.scss";
import "bootstrap";

const app = createApp(App);

app.use(router);
app.mount("#app");
