<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <v-btn
        @click="showHome"
        class="ma-2"
        outlined
        color="darkolivegreen"
        v-if="editContent === false"
      >
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>

      <v-btn
        @click="viewProjectDetail"
        class="ma-2"
        outlined
        color="darkolivegreen"
        v-else
      >
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>

      <v-btn
        v-if="!todoItemDetail.markDone"
        @click="markAsDone"
        class="ma-2"
        outlined
        color="darkolivegreen"
      >
        <v-icon dark left>mdi-checkbox-marked-circle</v-icon>Mark done
      </v-btn>
    </div>

    <div v-if="!editContent">
      <h2>{{ todoItemDetail.projectTitle }}</h2>
      <v-row class="ml-3">
        <small class="mr-2">Published: {{ todoItemDetail.projectDate }}</small>
        <small>By: {{ todoItemDetail.projectUpdater }}</small>
      </v-row>
      <div class="mt-2">
        {{ todoItemDetail.projectDetail }}
      </div>
      <v-spacer></v-spacer>

      <v-row class="d-flex justify-center" v-if="!todoItemDetail.markDone">
        <v-btn
          @click="editProject"
          class="ma-2"
          outlined
          color="darkolivegreen"
        >
          <v-icon dark left>mdi-pencil</v-icon>Edit
        </v-btn>
      </v-row>
    </div>

    <div v-else class="editContent" style="margin-left: 15%">
      <v-text-field
        color="darkolivegreen"
        label="bucket title"
        prepend-icon="mdi-domain"
        full-width
        v-model="todoItemDetail.projectTitle"
      />

      <v-textarea
        loading
        outlined
        rounded
        persistent-hint
        full-width
        height="50vh"
        class="editable-text"
        v-model="todoItemDetail.projectDetail"
        color="darkolivegreen"
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
          :disabled="loading3"
          @click="saveChanges"
          class="ma-2"
          outlined
          color="darkolivegreen"
        >
          <v-icon dark left>mdi-cloud-upload</v-icon>Save changes
        </v-btn>
      </v-row>
      <v-row justify="center">
        <!-- <p>Hit the back button once done to view all items</p> -->
        <v-btn @click="goHome" class="ma-2" outlined color="darkolivegreen">
          <v-icon dark left>mdi-home</v-icon>View All items
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TodoItemDetail',
  data() {
    return {
      editContent: false,
      bucketComplete: false,
      projectTitle: '',
      projectDetail: '',
      projectDate: '',

      loader: null,
      loading3: false,
      productData: null
    }
  },
  computed: {
    todoItemDetail() {
      const allTodoItems = this.$store.getters.allOfThem
      if (!allTodoItems) {
        this.getAllTodoItems()
      }
      return allTodoItems.find(
        todoItem => todoItem.id === this.$route.params.todoItemId
      )
    }
  },
  created() {
    // console.log('route params', this.$route.params.todoItemId)
    // if (!this.$store.getters.allOfThem) {
    //   this.$store.dispatch('getAllProjects')
    // }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    showHome() {
      this.$router.go(-1)
      // this.$router.push({ path: '/' })
    },
    getAllTodoItems() {
      this.$store.dispatch('getAllProjects')
    },
    editProject() {
      this.editContent = true
    },
    viewProjectDetail() {
      this.editContent = false
    },
    goHome() {
      this.$router.push({ name: 'todoItems' })
    },
    markAsDone() {
      this.bucketComplete = true
      // console.log(this.$route.params.todoItemId)
      this.saveChanges()
      this.showHome()
    },
    saveChanges() {
      this.loader = 'loading3'
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

      const project = {
        projectTitle: this.todoItemDetail.projectTitle,
        projectDetail: this.todoItemDetail.projectDetail,
        projectDate: this.todoItemDetail.projectDate,
        dateUpdated: dateTime,
        markDone: false,
        projectUpdater: localStorage.getItem('email')
      }

      if (this.bucketComplete) {
        console.log('markign complete')
        project.markDone = true
      }
      const projectId = this.$route.params.todoItemId
      this.$store.dispatch('updateProject', { project, projectId })
    }
  }
}
</script>

<style scoped>
.editable-text {
  scrollbar-width: thin;
}
textarea {
  scrollbar-width: thin;
}

#input-96 {
  scrollbar-width: thin;
}
</style>
