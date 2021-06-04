<template>
<v-container>
 <v-tabs color="darkolivegreen" class="mb-2" centered >
   <v-tab ripple @click="showAllItems">All items</v-tab>
   <v-tab @click="inProgress">Completed</v-tab>
   <v-tab @click="incomplete">Incomplete</v-tab>
 </v-tabs>

  <TodoList v-if="allItems" :todoItems="allItems"/>
<!--  <p>second {{allItems}}</p>-->

<!--  <v-row justify="center">-->
<!--    <v-btn small class="justify-center" fab dark color="darkolivegreen"  @click="dialog = true">-->
<!--      <v-icon dark>mdi-plus</v-icon>-->
<!--    </v-btn>-->
<!--  </v-row>-->
</v-container>
</template>

<script>
import { mapState } from 'vuex'
import TodoList from '../components/TodoList'
export default {
  name: 'ListTodoItems',
  components: {
    TodoList
  },
  computed: {
    ...mapState([
      'allTodoItems'
    ]),
    allItems () {
      return this.$store.getters.allOfThem
    }
  },
  methods: {
    showAllItems () {

    },
    inProgress () {

    },
    incomplete () {

    }
  }
}
</script>

<style scoped>

</style>
