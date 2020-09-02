<template>
  <div class="container is-fluid col-6">
    <v-card width="500" height="350" class="mx-auto mt-5">
      <v-card-text>
        <v-form v-if="show" class="login-detail">

          <v-text-field v-model="email" color="darkolivegreen" label="email" prepend-icon="mdi-account-circle" />
          <v-text-field
            v-model="password"
            color="darkolivegreen"
            :type="showPassword? 'text' : 'password'"
            label="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword =! showPassword"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn  @click="signUp" dark class="my-2 my-sm-0 option">SignUp</v-btn>
        <v-spacer></v-spacer>
        <v-btn dark @click="login" class="my-2 my-0 option">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showPassword: false,
      email: '',
      password: '',
      show: true
    }
  },
  methods: {
    login () {
      const loginForm = {
        email: this.email,
        password: this.password

      }
      this.$store.dispatch('login', loginForm)
      this.$router.push({ name: 'Home' })
    },
    signUp () {
      const signUpForm = {
        email: this.email,
        password: this.password

      }
      this.$store.dispatch('signup', signUpForm)
      this.$router.push({ name: 'Home' })
    },
    onReset (evt) {
      //   this.$nextTick(() => {
      //     this.show = true;
      //   });
    }
  }
}
</script>

<style>
.container {
  display: grid;
  place-items: center;
}
.login-detail {
  /* padding-top: 20px; */
  margin-top: 30px;
}

.option {
  /*width: 100px;*/
}
</style>
