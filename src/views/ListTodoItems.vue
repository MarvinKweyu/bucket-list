<template>
  <v-container>
    <v-tabs color="darkolivegreen" class="mb-2" centered>
      <v-tab ripple @click="showAllItems">All items</v-tab>
      <v-tab @click="inProgress">Completed</v-tab>
      <v-tab @click="incomplete">Incomplete</v-tab>
    </v-tabs>

    <TodoList v-if="allOfThem" :todoItems="allOfThem" class="all-todo" />

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
  components: {
    TodoList
  },
  computed: {
    ...mapGetters(['allOfThem'])
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
}
</style>
