<template>
<v-main class="align-content-center" style="margin-left: 15%">
  <v-card width="70vw">
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
      multiple
    >
      <template v-for="(item, index) in projects">
        <div :key="index">
        <v-list-item >
          <template>
            <v-list-item-content @click="getProjectDetails(item)">
              <v-list-item-title v-text="item.projectTitle"></v-list-item-title>
              <v-list-item-subtitle class="text--primary" v-text="item.projectDetail"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="item.projectDate"></v-list-item-subtitle>
            </v-list-item-content>

<!--            <v-list-item-action>-->
<!--              <v-list-item-action-text v-text="item.projectDate"></v-list-item-action-text>-->
<!--            </v-list-item-action>-->
          </template>
        </v-list-item>

        <v-divider
          v-if="index + 1 < projects.length"
          :key="index"
        ></v-divider>
        </div>

      </template>
    </v-list-item-group>
  </v-list>
  </v-card>
<!--  <div class="text-center">-->
<!--    <v-pagination-->
<!--      color="darkolivegreen"-->
<!--      dark-->
<!--      v-model="page"-->
<!--      :length="projects.length"-->
<!--    ></v-pagination>-->
<!--  </div>-->
</v-main>
</template>

<script>
export default {
  name: 'Project',
  data: () => ({
    selected: [2],
    page: 1,
    projects: []
  }),
  methods: {
    getProjectDetails (projectId) {
      this.$store.dispatch('getProjectDetail', projectId)
      const projectLogId = projectId.projectTitle.toLowerCase().replace(/\s/g, '-')
      this.$router.push({ name: 'projectDetail', params: { projectLogId } })
    }
  },
  computed: {
    // * alternatively use this
    // projects () {
    //   return this.$store.getters.getAllProjects
    // }
  },
  created () {
    this.projects = this.$store.getters.getAllProjects
  }
}
</script>

<style scoped>

</style>
