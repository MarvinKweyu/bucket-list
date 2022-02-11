<template>
  <v-container class="board-group">
    <div class="d-flex justify-space-between">
      <h3>{{ title }}</h3>
      <p class="item-count">{{ toDoItems.length }}</p>
    </div>
    <div class="add-btn d-flex justify-center">
      <v-icon color="teal" style="background-color: #e8f1f0">mdi-plus</v-icon>
    </div>

    <div class="item-list">
      <ItemDetail
        class="item-detail mt-2"
        v-for="item in toDoItems"
        :key="item.id"
      />
    </div>
  </v-container>
</template>



<script>
import ItemDetail from './ItemDetail'
export default {
  name: 'BoardGroup',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Board Group'
    },
    category: {
      type: String,
      required: false,
      default: 'completed'
    }
  },
  data() {
    return {
      toDoItems: [
        {
          id: 1,
          title: 'Item 1',
          description: 'Item 1 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 1'
        },
        {
          id: 2,
          title: 'Item 2',
          description: 'Item 2 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 2'
        },
        {
          id: 3,
          title: 'Item 3',
          description: 'Item 3 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 3'
        },
        {
          id: 4,
          title: 'Item 4',
          description: 'Item 4 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 4'
        },
        {
          id: 5,
          title: 'Item 5',
          description: 'Item 5 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 5'
        },
        {
          id: 6,
          title: 'Item 6',
          description: 'Item 6 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 6'
        },
        {
          id: 7,
          title: 'Item 7',
          description: 'Item 7 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 7'
        },
        {
          id: 8,
          title: 'Item 8',
          description: 'Item 8 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 8'
        },
        {
          id: 9,
          title: 'Item 9',
          description: 'Item 9 description',
          category: 'completed',
          markDone: true,
          projectTitle: 'Project 9'
        }
      ]
    }
  },
  components: {
    ItemDetail
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'newToDoItem' })
    },
    getItemsOfCategory() {
      return this.allOfThem.filter((item) => item.category === this.category)
    }
  }
}
</script>

<style scoped>
* {
  background: #f1f5f4;
}

.board-group {
  border-radius: 10px;
  height: 86vh;
}

.item-list {
  height: 74vh !important;
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
}
</style>