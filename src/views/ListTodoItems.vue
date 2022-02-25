<template class="mx-1">
  <div class="d-flex flex-container">
    <div class="row">
      <div class="col-3">
        <h3>Draggable 1</h3>
        <draggable
          class="list-group"
          :list="toDoItems"
          group="people"
          @change="log"
        >
          <ItemDetail
            class="list-group-item"
            v-for="(element, index) in toDoItems"
            :key="index"
            :item="element"
          />
        </draggable>
      </div>

      <div class="col-3">
        <h3>In progress</h3>
        <draggable
          class="list-group"
          :list="inProgress"
          group="people"
          @change="log"
        >
          <ItemDetail
            class="list-group-item"
            v-for="(element, index) in inProgress"
            :key="index"
            :item="element"
          />
        </draggable>
      </div>

      <div class="col-3">
        <h3>Done</h3>
        <draggable
          class="list-group"
          :list="doneItems"
          group="people"
          @change="log"
        >
          <ItemDetail
            class="list-group-item"
            v-for="(element, index) in doneItems"
            :key="index"
            :item="element"
          />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ItemDetail from '@/components/ItemDetail'
// import BoardGroup from '@/components/BoardGroup'

export default {
  name: 'ListTodoItems',
  data() {
    return {
      completedStatus: null,
      searchTodo: '',
      toDoItems: [],
      doneItems: [],
      inProgress: []
    }
  },
  components: {
    ItemDetail,
    draggable
    // BoardGroup
  },
  computed: {
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
  created() {
    this.getAllItems()
  },
  methods: {
    log(evt) {
      console.log('This is the event', evt)
    },
    add: function () {
      this.list.push({ name: 'Juan' })
    },
    replace: function () {
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: el.name + ' cloned'
      }
    },
    getAllItems() {
      this.toDoItems = this.$store.getters.toDoItems
      this.inProgress = this.$store.getters.inProgress
      this.doneItems = this.$store.getters.doneItems
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

.item-list {
  height: 74vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
}
</style>
