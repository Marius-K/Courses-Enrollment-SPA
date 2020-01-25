<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mx-4">
                <div class="card-body p-4">
                    <h1>Courses Enrollment</h1>

                    <p class="text-muted">Reset Password</p>

                    <div class="alert alert-success" role="alert" v-if="status">
                        {{ status }}
                    </div>

                    <div class="form-group">
                        <input id="email" name="email" type="text" class="form-control" :class="{ 'is-invalid': ('email' in errors) }" required autocomplete="email" autofocus placeholder="Email" v-model="email">

                        <div class="invalid-feedback" v-if="'email' in errors">
                            {{ errors.email[0] }}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-primary btn-flat btn-block" @click="sendResetRequest({email})">
                                Send Password Reset Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            email: null,
            query: this.$route.query
        };
    },

    mounted () {
        this.$store.commit('setLoading', false);
    },

    computed: {
        ...mapGetters([
            'errors', 'status'
        ])
    },

    methods: {
        ...mapActions({
            sendResetRequest: 'auth/sendResetRequest'
        })
    }
}
</script>

<style>

</style>