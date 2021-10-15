<template>
  <v-container>
    <v-tabs color="darkolivegreen" class="mb-2" centered>
      <v-tab ripple @click="completedStatus = null">All items</v-tab>
      <v-tab @click="completedStatus = true">Completed</v-tab>
      <v-tab @click="completedStatus = false">Incomplete</v-tab>
    </v-tabs>

    <v-row>
      <v-col>
        <v-text-field
          v-model.lazy="searchTodo"
          solo
          placeholder="Search..."
        ></v-text-field>
      </v-col>
    </v-row>

    <TodoList v-if="allOfThem" :todoItems="tasksToShow" class="all-todo" />

    <v-row justify="end">
      <v-btn
        small
        class="justify-center"
        fab
        dark
        color="darkolivegreen"
        @click="newToDoItem"
        title="Add ToDo item"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoList from '../components/TodoList'
export default {
  name: 'ListTodoItems',
  data() {
    return {
      completedStatus: null,
      searchTodo: ''
    }
  },
  components: {
    TodoList
  },
  computed: {
    ...mapGetters(['allOfThem']),
    tasksToShow() {
      const search = String(this.searchTodo).trim()
      if (this.completedStatus === null) {
        const items = [...this.allOfThem]
        return search.length > 0
          ? items.filter((item) => item.projectTitle.includes(search))
          : items
      } else {
        let items = [...this.allOfThem]
        items = items.filter((item) => item.markDone === this.completedStatus)
        return search.length > 0
          ? items.filter((item) => item.projectTitle.includes(search))
          : items
      }
    }
  },
  methods: {
    showAllItems() {},
    inProgress() {},
    incomplete() {},
    newToDoItem() {
      this.$router.push({ name: 'newToDoItem' })
    }
  }
}
</script>

<style scoped>
.all-todo {
  height: 60vh;
  width: 90vw;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  display: grid;
  place-items: center;
}
</style>
