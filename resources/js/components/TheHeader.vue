<template>
  <header class="main_menu home_menu"> <!-- TODO: {! isset($breadcrumb) ? 'single_page_menu' : 'home_menu' !}"> -->
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <router-link :to="{name: 'home'}" class="navbar-brand logo_1"> <img src="/img/single_page_logo.png" alt="logo"></router-link>
            <router-link :to="{name: 'home'}" class="navbar-brand logo_2"> <img src="/img/logo.png" alt="logo"> </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav align-items-center">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'courses.index'}">Courses</router-link>
                </li>
                <li class="nav-item dropdown" v-if="disciplines">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Disciplines
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <router-link 
                        :to="{name:'courses.index', query:{discipline: discipline.id}}"
                        class="dropdown-item" 
                        v-for="discipline in disciplines" 
                        :key="discipline.name"
                      >{{ discipline.name }}</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown" v-if="institutions">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Institutions
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <router-link 
                        :to="{name:'courses.index', query:{institution: institution.id}}"
                        class="dropdown-item" 
                        v-for="institution in institutions" 
                        :key="institution.name"
                      >{{ institution.name }}</router-link>
                    </div>
                </li>
                    <!-- @auth TODO:
                      <li class="nav-item">
                          <a class="nav-link" href="{! route('enroll.myCourses') !}">My Courses</a>
                      </li>
                      <li class="d-none d-lg-block">
                          <a class="btn_1" href="#" onclick="event.preventDefault(); document.getElementById('logoutform').submit();">Logout</a>
                          <form id="logoutform" action="{! route('logout') !}" method="POST" style="display: none;">
                              @csrf
                          </form>
                      </li>
                        
                    @endauth -->
              </ul>
            </div>
          </nav>
        </div>
      </div>
  </div>
</header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      institutions: 'menu/menuInstitutions',
      disciplines: 'menu/menuDisciplines',
    })
  },

  created () {
    this.fetchMenuData();
  },

  methods: {
    ...mapActions({
      fetchMenuData: 'menu/fetchMenuData'
    })
  }

}
</script>
