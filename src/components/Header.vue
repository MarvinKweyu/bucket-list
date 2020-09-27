<template>
    <v-app-bar
  app
  light
  shaped
>
  <div class="d-flex align-center">
    <h2>MartMarv</h2>
  </div>

  <v-spacer></v-spacer>
<!--      <v-switch  class="px-5 mt-4" :label="`Dark Theme`" v-model="goDark"></v-switch>-->
      <v-btn outlined @click="onLogout">Logout</v-btn>
</v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      goDark: false
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  },
  watch: {
    changer () {
      if (this.goDark === true) {
        return (this.$vuetify.theme.dark = true)
      } else {
        return (this.$vuetify.theme.dark = false)
      }
    }

  }
}
</script>

<style scoped>
  h2{
    /*font-style: italic;*/
    color: darkolivegreen;
  }
</style>
