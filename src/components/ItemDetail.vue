<template class="item-detail">
  <v-container>
    <h5>{{ item.title }}</h5>

    <article class="description">
      {{ item.description }}
    </article>
  </v-container>
</template>


<script>
export default {
  name: 'ItemDetail',
  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({
        title: 'New item',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id. Senectus et netus et malesuada fames. Risus in hendrerit gravida rutrum quisque non tellus orci ac. ',
        completed: false
      })
    }
  }
}
</script>


<style scoped>
.description {
  font-size: 14px;
  color: #8c8c8c;
}
</style>