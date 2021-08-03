//Route Components
import Home from "./components/Home.vue";
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina1 from "./components/Pagina1.vue";
import Pagina2 from "./components/Pagina2.vue";
import NotFound from "./components/NotFound.vue";

//Paquetes
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/blog", component: Blog },
  { path: "/formulario", component: Formulario },
  { path: "/pagina1/:nombre?/:apellido?", name: "pagina1", component: Pagina1 },
  { path: "/pagina2", component: Pagina2 },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
