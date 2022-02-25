<template class="mx-1">
  <div class="d-flex flex-container">
    <div class="row">
      <div class="col-3 board-group">
        <div class="d-flex justify-space-between">
          <h3 class="text-capitalize">ToDo</h3>
          <p class="item-count">{{ toDoItems.length }}</p>
        </div>
        <div class="add-btn d-flex justify-center" @click="newItem = !newItem">
          <v-icon color="teal" style="background-color: #e8f1f0"
            >mdi-plus</v-icon
          >
        </div>

        <div v-if="newItem" class="mt-2">
          <v-text-field
            label="Item title"
            color="#8c8c8c"
            class="mx-2"
            v-model="newItemData.title"
          ></v-text-field>
          <v-textarea
            v-model="newItemData.description"
            name="input-7-1"
            hint="Add new item"
            outlined
            color="#8c8c8c"
            label="Item description"
            class="mx-2"
            auto-grow
          ></v-textarea>
          <div class="d-flex justify-space-between mx-4">
            <v-btn
              @click="newItem = false"
              color="secondary"
              elevation="2"
              outlined
              plain
              >Cancel</v-btn
            >
            <v-btn
              color="secondary"
              elevation="2"
              outlined
              plain
              @click="addItem"
              >Add</v-btn
            >
          </div>
        </div>

        <draggable
          class="list-group"
          :list="toDoItems"
          group="people"
          @change="log"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <ItemDetail
              class="list-group-item item-detail mt-2"
              v-for="(element, index) in toDoItems"
              :key="index"
              :item="element"
            />
          </transition-group>
        </draggable>
      </div>

      <div class="col-3 board-group">
        <div class="d-flex justify-space-between">
          <h3 class="text-capitalize">In Progress</h3>
          <p class="item-count">{{ inProgress.length }}</p>
        </div>
        <draggable
          class="list-group"
          :list="inProgress"
          group="people"
          @change="log"
        >
          <transition-group
            type="transition"
            :name="!inProgressDrag ? 'flip-list' : null"
          >
            <ItemDetail
              class="list-group-item item-detail mt-2"
              v-for="(element, index) in inProgress"
              :key="index"
              :item="element"
            />
          </transition-group>
        </draggable>
      </div>

      <div class="col-3 board-group">
        <div class="d-flex justify-space-between">
          <h3 class="text-capitalize">Done</h3>
          <p class="item-count">{{ doneItems.length }}</p>
        </div>
        <draggable
          class="list-group"
          :list="doneItems"
          group="people"
          @change="log"
        >
          <transition-group
            type="transition"
            :name="!completedDrag ? 'flip-list' : null"
          >
            <ItemDetail
              class="list-group-item item-detail mt-2"
              v-for="(element, index) in doneItems"
              :key="index"
              :item="element"
            />
          </transition-group>
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
      newItem: false,
      newItemData: {
        title: '',
        description: '',
        category: 'toDo'
      },
      toDoItems: [],
      doneItems: [],
      inProgress: [],
      drag: false,
      inProgressDrag: false,
      completedDrag: false
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
    },
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
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
    addItem() {
      this.toDoItems.push(this.newItemData)
      this.newItem = false
      this.newItemData = {
        title: '',
        description: '',
        category: 'toDo'
      }
    },
    getAllItems() {
      this.toDoItems = this.$store.getters.toDoItems
      this.inProgress = this.$store.getters.inProgress
      this.doneItems = this.$store.getters.doneItems
    },
    updateStore() {
      this.toDoItems.map((item) => {
        item.category = 'toDo'
      })
      this.inProgress.map((item) => {
        item.category = 'inProgress'
      })
      this.doneItems.map((item) => {
        item.category = 'completed'
      })
      this.$store.dispatch('updateToDoItems', [
        ...this.toDoItems,
        ...this.inProgress,
        ...this.doneItems
      ])
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

.board-group {
  border-radius: 10px;
  height: 86vh;
  background: #f1f5f4;
  margin: auto;
}

@media (max-width: 800px) {
  .board-group {
    height: 30vh;
  }
}

.item-list {
  height: 74vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
}

.add-btn {
  cursor: pointer;
  background-color: #e8f1f0;
  border-radius: 6px;
  height: 30px;
}

.item-count {
  font-size: 12px;
  color: #8c8c8c;
  background-color: #e8f1f0;
  border-radius: 6px;
  padding: 2%;
}

.item-detail {
  padding: 20px;
  border-radius: 4px;
  /* background: #f1f5f4; */
  background-color: white;
  cursor: -moz-grab;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
