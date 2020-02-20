<template>
    <div>
        <TheBreadcrumb title="Courses"></TheBreadcrumb>
        <section class="special_cource padding_top">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-5">
                        <div class="section_tittle text-center">
                            <h2>Courses</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-lg-4" v-for="course in courses" :key="course.name">
                        <div class="single_special_cource">
                            <img :src="course.photo ? course.photo.url : 'img/no_image.png'" class="special_img" alt="">
                            <div class="special_cource_text">
                                <router-link
                                    :to="{ name: 'courses.index', query: { discipline: discipline.id } }"
                                    class="btn_4 mr-1 mb-1" 
                                    v-for="discipline in course.disciplines"
                                    :key="discipline.name"
                                >{{ discipline.name }}</router-link>
                                <h4>{{ course.price | currency }}</h4>
                                <router-link :to="{name:'courses.show', params:{id: course.id}}"><h3>{{ course.name }}</h3></router-link>
                                <p>{{ course.description }}</p>
                                <div class="author_info" v-if="course.institution">
                                    <div class="author_img">
                                        <img :src="course.institution.logo ? course.institution.logo.thumbnail : 'img/no_image.png'" alt="" class="rounded-circle">
                                        <div class="author_info_text">
                                            <p>Institution</p>
                                            <h5><router-link :to="{ name: 'courses.index', query: { institution: course.institution.id } }">{{ course.institution.name }}</router-link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="float-right">
                            <ThePagination></ThePagination>
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
  computed: {
    ...mapGetters({
      courses: "courses/courses"
    })
  },

  created () {
    this.fetchAllCourses(this.$route.query);
  },
  
  methods: {
    ...mapActions({
      fetchAllCourses: "courses/fetchAllCourses"
    })
  }
}
</script>

<style>

</style>