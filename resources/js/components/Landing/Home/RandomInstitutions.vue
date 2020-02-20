<template>
    <section class="blog_part section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5">
                    <div class="section_tittle text-center">
                        <p>Institutions</p>
                        <h2>Random Institutions</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-4 col-xl-4" v-for="institution in randomInstitutions" :key="institution.name">
                    <div class="single-home-blog">
                        <div class="card">
                            <img :src="institution.logo ? institution.logo.url : 'img/no_image.png'" class="card-img-top" :alt="institution.name">
                            <div class="card-body">
                                <router-link :to="{name: 'courses.index', query: {institution: institution.id}}">
                                    <h5 class="card-title">{{ institution.name }}</h5>
                                </router-link>
                                <p>{{ institution.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters({
      randomInstitutions: 'home/institutions'
    })
  }
}
</script>
