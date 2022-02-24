<template>
  <v-container class="board-group">
    <div class="d-flex justify-space-between">
      <h3 class="text-capitalize">{{ title }}</h3>
      <p class="item-count">{{ categoryData.length }}</p>
    </div>
    <div class="add-btn d-flex justify-center" v-if="title === 'Todo'">
      <v-icon
        color="teal"
        style="background-color: #e8f1f0"
        @click="newItem = !newItem"
        >mdi-plus</v-icon
      >
    </div>

    <div class="item-list">
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
          <v-btn color="secondary" elevation="2" outlined plain @click="addItem"
            >Add</v-btn
          >
        </div>
      </div>
      <ItemDetail
        class="item-detail mt-2"
        v-for="item in categoryData"
        :key="item.id"
        :item="item"
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
    categoryData: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      newItem: false,
      newItemData: {
        title: '',
        description: '',
        category: 'toDo'
      }
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
    },
    addItem() {
      this.$store.dispatch('createProject', this.newItemData)
      this.newItem = false
      this.newItemData = {
        title: '',
        description: '',
        category: 'toDo'
      }
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
</style>