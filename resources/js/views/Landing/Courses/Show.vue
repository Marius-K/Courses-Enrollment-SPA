<template>
    <div>
        <TheBreadcrumb :title="course.name"></TheBreadcrumb>
        <section class="course_details_area section_padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 course_details_left">
                        <div class="main_image">
                            <img class="img-fluid" :src="course.photo ? course.photo.url : 'img/no_image.png'" alt="">
                        </div>
                        <div class="content_wrapper">
                            <h4 class="title_top">Description</h4>
                            <div class="content">
                                {{ course.description || "No description provided" }}
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 right-contents">
                        <div class="sidebar_top">
                            <ul>
                                <li v-if="course.institution">
                                    <a class="justify-content-between d-flex">
                                        <p>Institution</p>
                                        <span class="color">{{  course.institution.name  }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="justify-content-between d-flex">
                                        <p>Course Fee </p>
                                        <span>{{ course.price | currency }}</span>
                                    </a>
                                </li>

                            </ul>
                            <router-link :to="{ name: 'enrollments.create', params: { id: course.id } }" class="btn_1 d-block">Enroll the course</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: [
    'id'
  ],

  computed: {
    ...mapGetters({
      course: "courses/course"
    })
  },

  created () {
    this.fetchCourse(this.id);
  },
  
  methods: {
    ...mapActions({
      fetchCourse: "courses/fetchCourse"
    })
  }
}
</script>

<style>

</style>