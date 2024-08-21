import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/style.css"; // グローバルCSSファイルをインポート(全体に適用される)

const app = createApp(App);
app.mount("#app");
