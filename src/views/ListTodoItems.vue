<template>
  <v-container>
    <div class="d-flex flex mx-auto">
      <BoardGroup
        v-for="group in Object.keys(groupedItems)"
        :key="group"
        class="col-3"
        :title="group"
        :categoryData="groupedItems[group]"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import BoardGroup from '@/components/BoardGroup'

export default {
  name: 'ListTodoItems',
  data() {
    return {
      completedStatus: null,
      searchTodo: ''
    }
  },
  components: {
    BoardGroup
  },
  computed: {
    ...mapGetters(['allOfThem', 'groupedItems']),
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
</style>
