<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mx-4">
                <div class="card-body p-4">
                    <h1>Courses Enrollment</h1>

                    <p class="text-muted">Login</p>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-user"></i>
                            </span>
                        </div>

                        <input id="email" name="email" type="text" class="form-control" :class="{ 'is-invalid': ('email' in errors) }" required autocomplete="email" autofocus placeholder="Email" v-model="email">

                        <div class="invalid-feedback" v-if="'email' in errors">
                            {{ errors.email[0] }}
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-lock"></i></span>
                        </div>

                        <input id="password" name="password" type="password" class="form-control" :class="{ 'is-invalid': ('password' in errors) }" required placeholder="Password" v-model="password">

                        <div class="invalid-feedback" v-if="'password' in errors">
                            {{ errors.password[0] }}
                        </div>
                    </div>

                    <div class="input-group mb-4">
                        <div class="form-check checkbox">
                            <input class="form-check-input" name="remember" type="checkbox" id="remember" style="vertical-align: middle;" v-model="remember" />
                            <label class="form-check-label" for="remember" style="vertical-align: middle;">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn btn-primary px-4" @click="login({email, password, remember, query})">
                                Login
                            </button>
                        </div>
                        <div class="col-6 text-right">
                            <router-link class="btn btn-link px-0" :to="{ name: 'password.request' }">
                                Forgot your password?
                            </router-link><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data () {
        return {
            email: null,
            password: null,
            remember: null,
            query: this.$route.query
        };
    },

    mounted () {
        this.$store.commit('setLoading', false);
    },

    computed: {
        ...mapGetters([
            'errors'
        ])
    },

    methods: {
        ...mapActions({
            login: 'auth/sendLoginRequest'
        })
    }
}
</script>

<style>

</style>