<template>
  <v-container>


    <v-row align="center" justify="center">
      <v-col class="col-6 col-xs-12">
        <v-text-field
          v-model.lazy="searchTodo"
          solo
          placeholder="Search..."
        ></v-text-field>
      </v-col>
    </v-row>

    <TodoList v-if="allOfThem" :todoItems="tasksToShow" class="all-todo" />

    <router-link :to="{ name: 'newToDoItem' }" class="justify-center">
      <v-btn
        small
        class="justify-center"
        fab
        dark
        color="darkolivegreen"
        title="Add ToDo item"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </router-link>
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
