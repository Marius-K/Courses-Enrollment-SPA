import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../views/Home.vue"
      ),
    props: true
  },
  {
    path: "/courses",
    name: "courses.index",
    component: () =>
      import(
        /* webpackChunkName: "courses" */ "../views/Courses.vue"
      ),
    props: true,
    query: true
  },
  {
    path: "/courses/:id",
    name: "courses.show",
    component: () =>
      import(
        /* webpackChunkName: "course" */ "../views/Course.vue"
      ),
    props: true
  },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue")
    }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes
});
export default router;