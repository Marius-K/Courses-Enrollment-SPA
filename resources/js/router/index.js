import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import middlewarePipeline from "./middlewarePipeline"
import routes from "./routes"

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(async (to, from, next) => {
  if (store.getters['auth/isAuthenticated'] === null) {
    await store.dispatch('auth/fetchUserData');
  }

  store.commit('setErrors', {});
  store.commit('setStatus', null);
  store.commit('setLoading', true);
  store.commit('setBreadcrumb', false);

  if (!to.meta.middleware) {
      return next();
  }

  const middleware = to.meta.middleware;

  const context = {
      to,
      from,
      next,
      store
  };


  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  });

});


export default router;