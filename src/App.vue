<template>
  <v-app>
    <Header v-if="auth"></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    Header
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  },
  computed: {
    auth () {
      // returns authentication ; null or a value
      return this.$store.getters.isAuthenticated
    }
  },
  data: () => ({
    //
  })
}
</script>
