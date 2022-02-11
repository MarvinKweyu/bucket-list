<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col class="col-2 nav">
          <h2>The BucketList</h2>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/">
                  <v-icon>mdi-home</v-icon>
                  <span>Home</span>
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/todo">
                  <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
                  <span>ToDo</span>
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/projects">
                  <v-icon>mdi-format-list-bulleted-square</v-icon>
                  <span>Projects</span>
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/about">
                  <v-icon>mdi-information-outline</v-icon>
                  <span>About</span>
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="col-10">
          <Header />
          <div class="d-flex flex mx-auto">
            <BoardGroup v-for="group in 3" :key="group" class="col-3" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header'
import BoardGroup from './components/BoardGroup'

export default {
  name: 'App',

  components: {
    Header,
    BoardGroup
  },
  created() {
    this.$store.dispatch('tryAutoLogin')
  },
  computed: {
    auth() {
      // returns authentication ; null or a value
      return this.$store.getters.isAuthenticated
    }
  },
  data: () => ({
    //
  })
}
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
}
.nav {
  border-right: 1px solid teal;
}
</style>
