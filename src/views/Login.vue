<template>
  <div class="container col-6">
    <v-card width="500" height="350" class="mx-auto mt-5">
      <v-card-text>
        <v-form v-if="show" class="login-detail">
          <v-text-field color="success" label="username" prepend-icon="mdi-account-circle" />
          <v-text-field color="success" label="email" prepend-icon="mdi-account-circle" />
          <v-text-field
            color="success"
            :type="showPassword? 'text' : 'password'"
            label="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword =! showPassword"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn pill variant="success" class="my-2 my-sm-0 option">Signup</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="login" pill variant="primary" class="my-2 my-0 option">Login</v-btn>
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
      form: {
        username: '',
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.form)
      this.$router.push({ name: 'Home' })
      //   console.log("Submitted", loginDetail);
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      //   this.$nextTick(() => {
      //     this.show = true;
      //   });
    }
  }
}
</script>

<style>
.container {
  /* margin-top: 30px; */
  top: 25%;
}
.login-detail {
  /* padding-top: 20px; */
  margin-top: 30px;
}

.option {
  /*width: 100px;*/
}
</style>
