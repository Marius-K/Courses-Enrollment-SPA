import guest from "./middleware/guest"
import auth from "./middleware/auth"

export default [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/home" */ "../views/Landing/Home.vue"
      ),
    props: true
  },
  {
    path: "/courses",
    name: "courses.index",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/courses" */ "../views/Landing/Courses/Index.vue"
      ),
    props: true,
    query: true
  },
  {
    path: "/courses/:id",
    name: "courses.show",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/course" */ "../views/Landing/Courses/Show.vue"
      ),
    props: true
  },
  {
    path: "/my-courses",
    name: "enrollments.index",
    meta: {
      middleware: [
        auth
      ]
    },
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/my-courses" */ "../views/Landing/Enrollments/Index.vue"
      ),
    props: true
  },
  {
    path: "/enroll/:id",
    name: "enrollments.create",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/enroll" */ "../views/Landing/Enrollments/Create.vue"
      ),
    props: true 
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'auth',
      middleware: [
        guest
      ]
    },
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/login" */ "../views/Auth/Login.vue"
      )
  },
  {
    path: '/password/request',
    name: 'password.request',
    meta: {
      layout: 'auth',
      middleware: [
        guest
      ]
    },
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/password-request" */ "../views/Auth/PasswordRequest.vue"
      ),
  },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    meta: {
      layout: 'auth',
      middleware: [
        guest
      ]
    },
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/password-reset" */ "../views/Auth/PasswordReset.vue"
      ),
    props: true,
    query: true
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "js/chunks/not-found" */ "../views/Landing/NotFound.vue")
  }
];