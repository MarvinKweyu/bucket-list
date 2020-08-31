<template>
<v-main>
  <v-form>
    <v-text-field color="success"
    label="project title"
    prepend-icon="mdi-domain"
    v-model = "projectTitle"/>

    <v-textarea
      loading
      outlined
      rounded
      persistent-hint
      v-model="projectDetail"
      color="success"
    >

    </v-textarea>
  </v-form>
  <div>
    <v-btn @click = "suggestProject">Suggest project</v-btn>
  </div>
</v-main>
</template>

<script>
export default {
  name: 'newPost',
  data () {
    return {
      projectTitle: '',
      projectDetail: '',
      projectDate: ''
    }
  },
  methods: {
    suggestProject () {
      const newProject = {
        projectTitle: this.projectTitle,
        projectDetail: this.projectDetail,
        projectDate: this.projectDate
      }

      this.$store.dispatch('createProject', newProject)
    }
  }
}
</script>

<style scoped>

</style>
