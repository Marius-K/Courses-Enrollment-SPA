<template>
  <div>
    <HomeNewestCourses></HomeNewestCourses>
    <HomeRandomInstitutions></HomeRandomInstitutions>
  </div>
</template>

<script>
import HomeNewestCourses from '../../components/Landing/Home/NewestCourses'
import HomeRandomInstitutions from '../../components/Landing/Home/RandomInstitutions'
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