(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{55:function(t,e,s){"use strict";s.r(e);var r=s(0);function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(s,!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={props:["id"],computed:c({},Object(r.c)({course:"courses/course"})),created:function(){this.fetchCourse(this.id)},methods:c({},Object(r.b)({fetchCourse:"courses/fetchCourse"}))},a=s(1),l=Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TheBreadcrumb",{attrs:{title:t.course.name}}),t._v(" "),s("section",{staticClass:"course_details_area section_padding"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 course_details_left"},[s("div",{staticClass:"main_image"},[s("img",{staticClass:"img-fluid",attrs:{src:t.course.photo?t.course.photo.url:"img/no_image.png",alt:""}})]),t._v(" "),s("div",{staticClass:"content_wrapper"},[s("h4",{staticClass:"title_top"},[t._v("Description")]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n                            "+t._s(t.course.description||"No description provided")+"\n                        ")])])]),t._v(" "),s("div",{staticClass:"col-lg-4 right-contents"},[s("div",{staticClass:"sidebar_top"},[s("ul",[t.course.institution?s("li",[s("a",{staticClass:"justify-content-between d-flex"},[s("p",[t._v("Institution")]),t._v(" "),s("span",{staticClass:"color"},[t._v(t._s(t.course.institution.name))])])]):t._e(),t._v(" "),s("li",[s("a",{staticClass:"justify-content-between d-flex"},[s("p",[t._v("Course Fee ")]),t._v(" "),s("span",[t._v(t._s(t._f("currency")(t.course.price)))])])])]),t._v(" "),s("router-link",{staticClass:"btn_1 d-block",attrs:{to:{name:"enrollments.create",params:{id:t.course.id}}}},[t._v("Enroll the course")])],1)])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);