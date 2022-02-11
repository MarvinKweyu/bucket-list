<template>
  <v-container>
    <p class="text=center title">Bucket List</p>
    <p class="text-center subtitle">The Descriptive Bucketlist</p>

    <v-main class="main-content">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-container>
</template>

<script>
// import { mapActions } from 'vuex'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Footer
  },
  data() {
    return {
      dialog: false,
      snackbar: false,
      text: 'Project suggestion successful',
      timeout: 2000
    }
  },

  created() {
    this.$store.dispatch('getAllProjects')
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat Alternates', sans-serif !important;
}
</style>
