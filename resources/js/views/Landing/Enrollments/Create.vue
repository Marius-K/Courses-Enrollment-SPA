<template>
    <div>
        <TheBreadcrumb title="Enroll in course"></TheBreadcrumb>
        <div class="whole-wrap">
            <div class="container box_1170">
                <div class="section-top-border">
                    <div class="alert alert-danger" role="alert" v-if="Object.keys(errors).length">
                            <p v-for="error in errors" :key="error">{{ error[0] }}</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <h3 class="mb-30">Submit an application for course enrollment</h3>
                            <p v-if="!isAuthenticated">If you have account, login with your credentials <router-link :to="{ name: 'login', query: { redirect: this.$route.fullPath } }">here</router-link>.</p>
                            <form>
                                <div class="mt-10">
                                    <input type="text" name="name" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'"
                                    required class="single-input" :value="name" :disabled="isAuthenticated" @input="nameInput = $event.target.value">
                                </div>
                                <div class="mt-10">
                                    <input type="email" name="email" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'"
                                    required class="single-input" :value="email" :disabled="isAuthenticated" @input="emailInput = $event.target.value">
                                </div>
                                <div v-if="!isAuthenticated">
                                    <div class="mt-10">
                                        <input type="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"
                                        required class="single-input" v-model="password">
                                    </div>
                                    <div class="mt-10">
                                        <input type="password" name="password_confirmation" placeholder="Confirm Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Confirm Password'"
                                        required class="single-input" v-model="password_confirmation">
                                    </div>
                                </div>
                                <div class="mt-10 pull-right">
                                    <button type="button" class="genric-btn primary" name="submit" @click="sendEnrollRequest({course_id, name, email, password, password_confirmation})">Submit</button>
                                </div>
                            </form>
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
    props: [
        'id'
    ],

    data () {
        return {
            nameInput: null,
            emailInput: null,
            password: null,
            password_confirmation: null,
            course_id: this.id
        };
    },

    computed: {
        ...mapGetters({
            isAuthenticated: 'auth/isAuthenticated',
            userData: 'auth/userData',
            errors: 'errors'
        }),

        name () {
            if(this.isAuthenticated)
                return this.userData.name;
        
            return this.nameInput;
        },
        email () {
            if(this.isAuthenticated)
                return this.userData.email;
        
            return this.emailInput;
        },
    },

    methods: {
        ...mapActions('enrollment', [
            'sendEnrollRequest'
        ]),
        log(log) {console.log(log)}
    },

    mounted () {
        this.$store.commit('setLoading', false);
    }
}
</script>

<style>

</style>