<template class="mx-1">
  <div class="d-flex flex-container">
    <BoardGroup
      v-for="group in Object.keys(groupedItems)"
      :key="group"
      class="col-sm-3 col-xs-12 my-1 mx-auto"
      :title="group"
      :categoryData="groupedItems[group]"
    />
  </div>
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
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
