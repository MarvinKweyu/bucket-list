<template>
  <v-container>
    <v-main class=" d-flex justify-center">
      <v-card max-width="70vw">
        <v-list two-line>
          <v-list-item-group multiple>
            <template v-for="(item, index) in todoItems">
              <div :key="index">
                <v-list-item>
                  <template>
                    <v-list-item-content @click="getProjectDetails(item)">
                      <v-list-item-title
                        v-text="item.projectTitle"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.projectDetail"
                      ></v-list-item-subtitle>
                      <v-list-item-subtitle
                        v-text="item.projectDate"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <!--            <v-list-item-action>-->
                    <!--              <v-list-item-action-text v-text="item.projectDate"></v-list-item-action-text>-->
                    <!--            </v-list-item-action>-->
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < todoItems.length"
                  :key="index"
                ></v-divider>
              </div>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todoItems: {
      type: Array,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    getProjectDetails(item) {
      // this.$router.push({ path: `todos/details/${item.id}` })
      this.$router.push({
        name: 'todoItemDetail',
        params: { todoItemId: item.id }
      })
    }
  }
}
</script>

<style scoped></style>
