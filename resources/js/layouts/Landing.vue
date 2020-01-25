<template>
  <section>
    <TheHeader></TheHeader>
    <router-view :key="$route.fullPath" />
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"

export default {
    components: {
      TheHeader, TheFooter
    },

    beforeCreate () {
      document.getElementById('css-file').setAttribute("href", "/css/style.css");
    }
}
</script>
