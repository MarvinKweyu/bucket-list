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
</v-main>
</template>

<script>
export default {
  name: 'AccountRecovery',
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || 'Your email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    resetPassword () {
      this.$router.dispatch('resetPassword', this.email)
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
