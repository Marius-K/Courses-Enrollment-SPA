<template>
  <section id="app">
    <TheHeader></TheHeader>
    <router-view :key="$route.fullPath" />
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue"
import TheFooter from "./TheFooter.vue"

export default {
    el: '#app',
    components: {
      TheHeader, TheFooter
    }
}
</script>
