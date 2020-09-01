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
  <small>{{postDetail.projectDate}}</small>
  <div>
    {{postDetail.projectDetail}}
  </div>
  <v-spacer></v-spacer>

  <v-row class="d-flex justify-center">
    <v-btn @click="editProject(postDetail)" class="ma-2" outlined color="darkolivegreen">
      <v-icon dark left>mdi-pencil</v-icon>Edit
    </v-btn>
  </v-row>
  </div>

  <div v-else class="editContent">
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
        <v-icon dark left>mdi-pencil</v-icon>Cancel
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
    }
  }
}
</script>

<style scoped>
.editContent{
  width: 70vw;
}
</style>
