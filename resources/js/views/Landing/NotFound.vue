<template>
    <section class="blog_part section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5">
                    <div class="section_tittle text-center">
                        <p>Error</p>
                        <h2>Page Not Found</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <a class="go-back" @click="goBack">
                    <h5>Go back by pressing here</h5>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
.go-back:hover {
    cursor: pointer;
}
</style>