<template>
  <v-container class="whole-page">
    <div class="container is-fluid col-6">
      <v-card width="500" height="350" class="mx-auto mt-5" v-if="!showLoader">
        <v-card-text>
          <v-form
            class="login-detail"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              :rules="emailRules"
              v-model="email"
              color="darkolivegreen"
              label="email"
              prepend-icon="mdi-account-circle"
              required
            />
            <v-text-field
              v-model="password"
              color="darkolivegreen"
              :type="showPassword ? 'text' : 'password'"
              label="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :rules="passwordRules"
              required
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="signUp" dark class="my-2 my-sm-0 option">SignUp</v-btn>
          <v-spacer></v-spacer>
          <v-btn dark @click="login" class="my-2 my-0 option">Login</v-btn>
        </v-card-actions>
        <p @click="resetPassword" class="mt-2 d-flex justify-center">
          Reset password
        </p>
      </v-card>

      <div class="text-center mt-5" v-else>
        <v-progress-circular :size="50" color="darkolivegreen" indeterminate>
          loading</v-progress-circular
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showLoader: false,
      showPassword: false,
      email: '',
      password: '',
      valid: true,
      emailRules: [
        v => !!v || 'Key in an email',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Please set a password',
        v =>
          (v && v.length > 8) ||
          'For a stronger password, set it equal or greater than 9 characters'
      ]
    }
  },
  methods: {
    login() {
      const loginForm = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', loginForm)
      // loader here
      this.showLoader = true
      setTimeout(() => {
        this.$store.dispatch('getAllProjects')
        this.showLoader = false
        this.$router.push({ name: 'Home' })
      }, 3000)
    },
    signUp() {
      const signUpForm = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUp', signUpForm)
      this.$refs.form.reset()
      // loader here
      this.showLoader = true
      this.$router.push({ name: 'Home' })
    },
    onReset(evt) {
      //   this.$nextTick(() => {
      //     this.show = true;
      //   });
    },
    resetPassword() {
      this.$router.push({ path: 'account-recovery' })
    }
  }
}
</script>

<style>
p {
  color: darkolivegreen;
  cursor: pointer;
}
.whole-page {
  /* height: 100vh; */
  display: grid;
  place-items: center;
  /*background: ghostwhite;*/
}

.login-detail {
  /* padding-top: 20px; */
  margin-top: 30px;
}
</style>
