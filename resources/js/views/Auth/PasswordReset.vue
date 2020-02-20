<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mx-4">
                <div class="card-body p-4">
                    <h1>Courses Enrollment</h1>

                    <p class="text-muted">Reset Password</p>

                    <div class="alert alert-danger" role="alert" v-if="'token' in errors">
                        {{ errors.token[0] }}
                    </div>

                    <div class="form-group">
                        <input id="email" name="email" type="text" class="form-control" :class="{ 'is-invalid': ('email' in errors) }" required autocomplete="email" autofocus placeholder="Email" v-model="email">

                        <div class="invalid-feedback" v-if="'email' in errors">
                            {{ errors.email[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <input id="password" name="password" type="password" class="form-control" :class="{ 'is-invalid': ('password' in errors) }" required placeholder="Password" v-model="password">

                        <div class="invalid-feedback" v-if="'password' in errors">
                            {{ errors.password[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <input id="password-confirm" type="password" name="password_confirmation" class="form-control" required placeholder="Password confirmation" v-model="password_confirmation">
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-primary btn-block btn-flat" @click="reset({token, email, password, password_confirmation})">
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: [
    'token'
  ],

  data () {
    return {
      email: this.$route.query.email || null,
      password: null,
      password_confirmation: null
    };
  },

  mounted () {
      this.$store.commit('setLoading', false);
  },
  
  computed: {
    ...mapGetters({
      errors: 'errors'
    })
  },

  methods: {
    ...mapActions({
      setErrors: 'setErrors',
      reset: 'auth/resetPassword',
    })
  }
}
</script>

<style>

</style>