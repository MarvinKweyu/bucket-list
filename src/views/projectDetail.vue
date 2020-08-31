<template>
<v-main class="container">
  <h2> {{postDetail.projectTitle}}</h2>
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
  }
}
</script>

<style scoped>

</style>
