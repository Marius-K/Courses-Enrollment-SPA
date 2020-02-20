<template>
  <section>
    <TheHeader></TheHeader>
    <router-view :key="$route.fullPath" />
    <TheFooter></TheFooter>
  </section>
</template>

<script>
export default {
    beforeCreate () {
      document.getElementById('css-file').setAttribute("href", "/css/style.css");
    }
}
</script>
