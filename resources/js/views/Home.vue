<template>
  <div>
    <HomeNewestCourses></HomeNewestCourses>
    <HomeRandomInstitutions></HomeRandomInstitutions>
  </div>
</template>

<script>
import HomeNewestCourses from '../components/HomeNewestCourses'
import HomeRandomInstitutions from '../components/HomeRandomInstitutions'
import {mapActions} from 'vuex'

export default {
  components: {
    HomeNewestCourses, HomeRandomInstitutions
  },

  created () {
    this.fetchHomeData();
  },

  methods: {
    ...mapActions({
      fetchHomeData: 'home/fetchHomeData'
    })
  }
}
</script>

<style>

</style>