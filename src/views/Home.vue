<template>
 <v-container class="container is-fluid">
     <v-tabs color="darkolivegreen" centered>
       <v-tab ripple @click="goHome">All suggestions</v-tab>
       <v-tab @click="inProgress" >In progress</v-tab>
     </v-tabs>
       <v-btn small class="" fab dark color="darkolivegreen"  @click="dialog = true">
         <v-icon dark>mdi-plus</v-icon>
       </v-btn>

   <v-dialog
     v-model="dialog"
     max-width="590"
   >
     <app-new-post @closeDialog="closeDialog"></app-new-post>
   </v-dialog>

   <router-view></router-view>
 </v-container>
</template>

<script>
// @ is an alias to /src
// import homeTab from '../components/homeTab'
import newPost from '../components/newPost'

export default {
  name: 'Home',
  components: {
    'app-new-post': newPost
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    inProgress () {
      this.$router.push({ path: 'in-progress' })
    },
    goHome () {
      this.$router.push({ path: '/' })
    },
    closeDialog () {
      this.dialog = false
    }
  },
  computed: {

  }
}
</script>
