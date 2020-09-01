<template>
<v-main>
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
          v-if="index + 1 < items.length"
          :key="index"
        ></v-divider>
        </div>
      </template>
    </v-list-item-group>
  </v-list>
  </v-card>
</v-main>
</template>

<script>
export default {
  name: 'Project',
  data: () => ({
    selected: [2],
    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  }),
  methods: {
    getProjectDetails (projectId) {
      this.$store.dispatch('getProjectDetail', projectId)
      this.$router.push({ name: 'projectDetail' })
    }
  },
  computed: {
    projects () {
      return this.$store.getters.getAllProjects
    }
  }
}
</script>

<style scoped>

</style>
