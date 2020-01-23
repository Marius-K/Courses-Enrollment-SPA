<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
    el: '#app',
    computed: {
      layout () {
        return (this.$route.meta.layout || 'landing') + '-layout';
      }
    }
}
</script>
