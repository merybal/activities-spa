import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import AllActivitiesView from "./components/views/AllActivitiesView.vue";
import ActivityDetailView from "./components/views/ActivityDetailView.vue";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/actividades" },
    { path: "/actividades", component: AllActivitiesView },
    {
      path: "/actividades/:activityId",
      component: ActivityDetailView,
      props: true,
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 300);
    });
  },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
