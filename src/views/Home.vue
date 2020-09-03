<template>
 <v-container class="container is-fluid">
     <v-tabs color="darkolivegreen" centered>
       <v-tab ripple @click="goHome">All suggestions</v-tab>
       <v-tab @click="inProgress" >In progress</v-tab>
     </v-tabs>

   <v-container>
     <v-row justify="center">
       <v-btn small class="justify-center" fab dark color="darkolivegreen"  @click="dialog = true">
         <v-icon dark>mdi-plus</v-icon>
       </v-btn>
     </v-row>

       <v-dialog
         v-model="dialog"
         max-width="590"
       >
         <app-new-post @closeDialog="closeDialog" @confirmPostCreation="confirmPostCreation"></app-new-post>
       </v-dialog>

       <v-snackbar
         v-model="snackbar"
         :timeout="timeout"
         top
         left
         shaped
         color="success"
       >
         {{ text }}

         <template v-slot:action="{ attrs }">
           <v-btn
             color="white"
             text
             v-bind="attrs"
             @click="snackbar = false"
           >
             Close
           </v-btn>
         </template>
       </v-snackbar>
     <v-row justify="center">
       <router-view></router-view>
     </v-row>
   </v-container>
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
      dialog: false,
      snackbar: false,
      text: 'Project suggestion successful',
      timeout: 2000
    }
  },
  methods: {
    inProgress () {
      this.$router.push({ path: 'in-progress' })
    },
    goHome () {
      this.$router.push({ path: '/home' })
    },
    closeDialog () {
      this.dialog = false
    },
    confirmPostCreation () {
      this.snackbar = true
    }
  },
  created () {
    this.$store.dispatch('getAllProjects')
  }
}
</script>
