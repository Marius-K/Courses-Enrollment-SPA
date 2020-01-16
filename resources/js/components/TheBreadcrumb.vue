<template>
  <section class="breadcrumb breadcrumb_bg">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="breadcrumb_iner text-center">
                      <div class="breadcrumb_iner_item">
                          <h2>{{ title }}</h2>
                          <p><router-link :to="{ name: 'home' }">Home</router-link><span>/</span><router-link :to="this.$route">{{ title }}</router-link></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>

</style>