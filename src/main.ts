import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faAngleDown,
  faClock,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faAngleDown, faClock, faTemperatureHalf);

import App from "./App.vue";
import router from "./router";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
