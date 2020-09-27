<template>
<v-main>
  <v-tabs color="darkolivegreen" centered>
    <v-tab ripple router>All suggestions</v-tab>
    <v-tab>In progress</v-tab>
  </v-tabs>
</v-main>
</template>

<script>
export default {
  name: 'homeTab',
  data () {
    return {
      newProject: true
    }
  },
  components: {
    // 'app-project': Project,
    // 'app-new-post': newPost
  },
  created () {
    this.$store.dispatch('getAllProjects')
  }
}
</script>

<style scoped>

</style>
