<template>
  <v-container>
    <p class="text=center title">Bucket List</p>
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
  methods: {
    inProgress() {
      this.$router.push({ path: 'in-progress' })
    },
    goHome() {
      this.$router.push({ path: '/home' })
    },
    closeDialog() {
      this.dialog = false
    },
    confirmPostCreation() {
      this.snackbar = true
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
.main-content {
  position: relative;
}
.bottom {
  bottom: 0;
  position: absolute;
}
</style>
