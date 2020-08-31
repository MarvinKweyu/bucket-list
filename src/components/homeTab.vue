<template>
<v-main>
  <v-tabs color="darkolivegreen">
    <v-tab @click="newProject=true">New suggestion</v-tab>
    <v-tab ripple @click="newProject=false">All suggestions</v-tab>
  </v-tabs>
  <div v-if="newProject">
    <app-new-post></app-new-post>
  </div>

  <div v-else>
    <app-project></app-project>
  </div>
</v-main>
</template>

<script>
import Project from '../components/Project'
import newPost from '../components/newPost'
export default {
  name: 'homeTab',
  data () {
    return {
      newProject: true
    }
  },
  components: {
    'app-project': Project,
    'app-new-post': newPost
  },
  created () {
    this.$store.dispatch('getAllProjects')
  }
}
</script>

<style scoped>

</style>
