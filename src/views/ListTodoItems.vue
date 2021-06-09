<template>
  <v-container>
    <v-tabs color="darkolivegreen" class="mb-2" centered>
      <v-tab ripple @click="completedStatus = null">All items</v-tab>
      <v-tab @click="completedStatus = true">Completed</v-tab>
      <v-tab @click="completedStatus = false">Incomplete</v-tab>
    </v-tabs>

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
      completedStatus: null
    }
  },
  components: {
    TodoList
  },
  computed: {
    ...mapGetters(['allOfThem']),
    tasksToShow() {
      if (this.completedStatus != null) {
        return this.allOfThem.filter(
          task => task.markDone === this.completedStatus
        )
      } else {
        return this.allOfThem
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
  height: 500px;
  overflow-y: scroll;
  scrollbar-width: thin;
  display: grid;
  place-items: center;
}
</style>
