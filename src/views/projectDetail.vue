<template>
<v-main class="container">
  <div>
    <v-btn @click="showHome" class="ma-2" outlined color="darkolivegreen" v-if="editContent === false">
      <v-icon dark left>mdi-arrow-left</v-icon>Back
    </v-btn>

    <v-btn @click="viewProjectDetail" class="ma-2" outlined color="darkolivegreen" v-else>
      <v-icon dark left>mdi-arrow-left</v-icon>Back
    </v-btn>
  </div>

  <div v-if="editContent === false">
  <h2> {{postDetail.projectTitle}}</h2>
    <v-row class="ml-3">
      <small class="mr-2">Published: {{postDetail.projectDate}}</small>
      <small>By: {{postDetail.projectAuthor}}</small>
    </v-row>
  <div class="mt-2">
    {{postDetail.projectDetail}}
  </div>
  <v-spacer></v-spacer>

  <v-row class="d-flex justify-center">
    <v-btn @click="editProject" class="ma-2" outlined color="darkolivegreen">
      <v-icon dark left>mdi-pencil</v-icon>Edit
    </v-btn>
  </v-row>
  </div>

  <div v-else class="editContent" style="margin-left: 15%">
    <v-text-field color="darkolivegreen"
                  label="project title"
                  prepend-icon="mdi-domain"
                  full-width
                  v-model = "projectTitle"/>

    <v-textarea
      loading
      outlined
      rounded
      persistent-hint
      full-width
      height="70vh"
      v-model="projectDetail"
      color="darkolivegreen"
    >

    </v-textarea>
    <v-row class="d-flex justify-center">
      <v-btn @click="viewProjectDetail" class="ma-2" outlined color="darkolivegreen">
        <v-icon dark left>mdi-cancel</v-icon>Cancel
      </v-btn>

      <v-btn
        :loading="loading3"
        :disabled="loading3"
        @click="saveChanges"
        class="ma-2"
        outlined
        color="darkolivegreen">
        <v-icon dark left>mdi-cloud-upload</v-icon>Save changes
      </v-btn>
    </v-row>
  </div>
</v-main>
</template>

<script>
export default {
  name: 'projectDetail',
  data () {
    return {
      editContent: false,
      projectTitle: '',
      projectDetail: '',
      projectDate: '',

      loader: null,
      loading3: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  computed: {
    postDetail () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.projectTitle = this.$store.getters.getProjectDetail.projectTitle
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.projectDetail = this.$store.getters.getProjectDetail.projectDetail
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.projectDate = this.$store.getters.getProjectDetail.projectDate
      return this.$store.getters.getProjectDetail
    }
  },
  methods: {
    showHome () {
      this.$router.go(-1)
      // this.$router.push({ path: '/' })
    },
    editProject () {
      this.editContent = true
    },
    viewProjectDetail () {
      this.$router.go(-1)
    },
    saveChanges () {
      this.loader = 'loading3'
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = date + ' ' + time

      const project = {
        projectTitle: this.projectTitle,
        projectDetail: this.projectDetail,
        projectDate: this.projectDate,
        dateUpdated: dateTime,
        projectUpdater: localStorage.getItem('email')
      }
      this.$store.dispatch('updateProject', project)
      this.$store.dispatch('getAllProjects')
    }
  }
}
</script>

<style scoped>
.editContent{
  width: 70vw;
}
</style>
