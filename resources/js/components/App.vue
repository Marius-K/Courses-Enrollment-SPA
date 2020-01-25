<template>
  <div id="app">
    <div class="loading" v-if="loading">Loading&#8230;</div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    el: '#app',
    computed: {
      layout () {
        return (this.$route.meta.layout || 'landing') + '-layout';
      },
      ...mapGetters([
        'loading'
      ])
    }
}
</script>
