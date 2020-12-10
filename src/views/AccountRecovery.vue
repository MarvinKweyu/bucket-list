<template>
<v-main class="reset">
  <v-card width="500" height="350" class="mx-auto mt-5">
    <v-card-text>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
    <v-text-field
      :rules="emailRules"
      v-model="email"
      color="darkolivegreen"
      label="email"
      prepend-icon="mdi-account-circle"
      required
    />
  </v-form>
    </v-card-text>
    <v-card-actions class="d-flex justify-center text-center">
      <v-btn dark @click="resetPassword">Recover</v-btn>
    </v-card-actions>
  </v-card>

  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    top
    left
    shaped
    :color=recovery
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</v-main>
</template>

<script>
export default {
  name: 'AccountRecovery',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'Your email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    snackbar: false,
    text: '',
    recovery: 'success',
    timeout: 2000
  }),
  methods: {
    resetPassword () {
      const resetInfo = {
        email: this.email,
        errorResetMessage: null
      }
      this.$store.dispatch('resetPassword', resetInfo)
      const resetFail = this.$store.getters.resetError
      console.log('reset fail', resetFail)
      if (resetFail) {
        this.text = 'Email does not exist'
        this.recovery = '#F44336'
      } else {
        this.text = 'Check your mail inbox for password reset information'
        this.recovery = 'success'
      }

      this.snackbar = true
    }
  }
}
</script>

<style scoped>
.reset{
  display: grid;
  place-items: center;
}
</style>
