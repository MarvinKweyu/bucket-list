<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
    <v-card-title class="headline grey lighten-2">
      Suggest new Project
    </v-card-title>

    <v-card-text>
      <v-text-field
        color="darkolivegreen"
        label="project title"
        prepend-icon="mdi-domain"
        v-model = "projectTitle"
        required
        :rules="titleRules"
      />

      <v-textarea
        loading
        outlined
        rounded
        persistent-hint
        v-model="projectDetail"
        color="darkolivegreen"
        required
        :rules="detailRules"
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
      <v-btn :disabled="!valid" dark color="darkolivegreen" @click="suggestProject">Suggest project</v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'newPost',
  data () {
    return {
      projectTitle: '',
      projectDetail: '',
      projectDate: '',
      valid: true,
      titleRules: [
        v => !!v || 'A title is required',
        v => (v && v.length > 4) || 'The title must be greater than 4 characters'
      ],
      detailRules: [
        v => !!v || 'A project description is required',
        v => (v && v.length > 10) || 'Detail must be greater than 10 characters'
      ]
    }
  },
  methods: {
    suggestProject () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = date + ' ' + time

      const newProject = {
        projectTitle: this.projectTitle,
        projectDetail: this.projectDetail,
        projectDate: dateTime
      }

      this.$store.dispatch('createProject', newProject)
      this.$store.dispatch('getAllProjects')
      this.$refs.form.reset()
      this.$emit('closeDialog')
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>

</style>
