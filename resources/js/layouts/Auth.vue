<template>
  <div class="header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden login-page">
      <div class="app flex-row align-items-center">
          <div class="container">
              <router-view :key="$route.fullPath" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    document.getElementById('css-file').setAttribute("href", "https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css");
  }
}
</script>
