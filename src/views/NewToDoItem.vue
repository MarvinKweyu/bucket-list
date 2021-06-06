<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <v-btn @click="goHome" class="ma-2" outlined color="darkolivegreen">
        <v-icon dark left>mdi-arrow-left</v-icon>Cancel
      </v-btn>

      <!-- <v-btn @click="markAsDone" class="ma-2" outlined color="darkolivegreen">
        <v-icon dark left>mdi-checkbox-marked-circle</v-icon>Mark done
      </v-btn> -->
    </div>

    <div class="editContent" style="margin-left: 15%">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          color="darkolivegreen"
          label="bucket title"
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
            :disabled="!projectTitle"
            @click="createToDo"
            class="ma-2"
            outlined
            color="darkolivegreen"
          >
            <v-icon dark left>mdi-cloud-upload</v-icon>Create
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
      projectTitle: null,
      projectDetail: '',
      projectDate: '',
      valid: false,
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
      // console.log(newProject)
      this.$store.dispatch('createProject', newProject).then(response => {
        if (response.status === 200) {
          this.$toast.open({
            message: 'ToDo item created',
            type: 'success',
            duration: 3000,
            position: 'top-left',
            dismissible: true
          })
          this.$refs.form.reset()
          this.goHome()
        } else {
          this.$toast.open({
            message: 'ToDo item was not created',
            type: 'error',
            duration: 2000,
            position: 'top-left',
            dismissible: true
          })
        }
      })
    },
    goHome() {
      this.$router.push({ name: 'todoItems' })
    }
  }
}
</script>
