import guest from "../middleware/guest"
import auth from "../middleware/auth"

export default [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/home" */ "../views/Home.vue"
      ),
    props: true
  },
  {
    path: "/courses",
    name: "courses.index",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/courses" */ "../views/Courses.vue"
      ),
    props: true,
    query: true
  },
  {
    path: "/courses/:id",
    name: "courses.show",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/course" */ "../views/Course.vue"
      ),
    props: true
  },
  {
    path: "/my-courses",
    name: "my-courses",
    meta: {
      middleware: [
        auth
      ]
    },
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/my-courses" */ "../views/MyCourses.vue"
      ),
    props: true
  },
  {
    path: "/enroll/:id",
    name: "enroll",
    component: () =>
      import(
        /* webpackChunkName: "js/chunks/enroll" */ "../views/EnrollCourse.vue"
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
        /* webpackChunkName: "js/chunks/login" */ "../views/Login.vue"
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
        /* webpackChunkName: "js/chunks/password-request" */ "../views/PasswordRequest.vue"
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
        /* webpackChunkName: "js/chunks/password-reset" */ "../views/PasswordReset.vue"
      ),
    props: true,
    query: true
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "js/chunks/not-found" */ "../views/NotFound.vue")
  }
];