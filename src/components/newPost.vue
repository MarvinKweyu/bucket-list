<template>
  <v-card>
    <v-card-title class="headline grey lighten-2">
      Suggest new Project
    </v-card-title>

    <v-card-text>
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

    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        color="darkolivegreen"
        text
        @click="closeDialog"
      >
        Cancel
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="suggestProject">Suggest project</v-btn>
    </v-card-actions>
  </v-card>
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
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>

</style>
