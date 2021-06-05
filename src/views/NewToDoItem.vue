<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <v-btn @click="showHome" class="ma-2" outlined color="darkolivegreen">
        <v-icon dark left>mdi-arrow-left</v-icon>Cancel
      </v-btn>

      <v-btn @click="markAsDone" class="ma-2" outlined color="darkolivegreen">
        <v-icon dark left>mdi-checkbox-marked-circle</v-icon>Mark done
      </v-btn>
    </div>

    <div class="editContent" style="margin-left: 15%">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          color="darkolivegreen"
          label="project title"
          prepend-icon="mdi-domain"
          full-width
          v-model="projectTitle"
          required
          :rules="titleRules"
        />

        <v-textarea
          loading
          outlined
          rounded
          persistent-hint
          full-width
          max-height="50vh"
          class="editable-text"
          v-model="projectDetail"
          color="darkolivegreen"
          required
          :rules="detailRules"
        >
        </v-textarea>
        <v-row class="d-flex justify-center">
          <v-btn
            @click="viewProjectDetail"
            class="ma-2"
            outlined
            color="darkolivegreen"
          >
            <v-icon dark left>mdi-cancel</v-icon>Cancel
          </v-btn>

          <v-btn
            :loading="loading3"
            :disabled="!valid"
            @click="saveChanges"
            class="ma-2"
            outlined
            color="darkolivegreen"
          >
            <v-icon dark left>mdi-cloud-upload</v-icon>Create
          </v-btn>
        </v-row>
        <v-row justify="center">
          <!-- <p>Hit the back button once done to view all items</p> -->
          <v-btn @click="goHome" class="ma-2" outlined color="darkolivegreen">
            <v-icon dark left>mdi-home</v-icon>View All items
          </v-btn>
        </v-row>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'NewToDoItem',
  data() {
    return {
      projectTitle: '',
      projectDetail: '',
      projectDate: '',
      valid: true,
      titleRules: [
        v => !!v || 'A title is required',
        v =>
          (v && v.length > 4) || 'The title must be greater than 4 characters'
      ],
      detailRules: [
        v => !!v || 'A project description is required',
        v => (v && v.length > 10) || 'Detail must be greater than 10 characters'
      ]
    }
  },
  methods: {
    createToDo() {
      const today = new Date()
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()
      const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = date + ' ' + time

      const newProject = {
        projectTitle: this.projectTitle,
        projectDetail: this.projectDetail,
        projectDate: dateTime,
        projectAuthor: localStorage.getItem('email'),
        markDone: false
      }
      console.log(newProject)
      this.$refs.form.reset()
    }
  }
}
</script>
