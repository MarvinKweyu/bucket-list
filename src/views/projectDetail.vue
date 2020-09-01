<template>
<v-main class="container">
    <v-btn @click="showHome" class="ma-2" outlined color="darkolivegreen">
      <v-icon dark left>mdi-arrow-left</v-icon>Back
    </v-btn>
  <h2> {{postDetail.projectTitle}}</h2>
  <small>{{postDetail.projectDate}}</small>
  <div>
    {{postDetail.projectDetail}}
  </div>
</v-main>
</template>

<script>
export default {
  name: 'projectDetail',
  computed: {
    postDetail () {
      return this.$store.getters.getProjectDetail
    }
  },
  methods: {
    showHome () {
      this.$router.go(-1)
      // this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>
