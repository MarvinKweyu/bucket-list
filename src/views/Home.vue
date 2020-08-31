<template>
 <v-container class="container is-fluid">
   <v-row class="text-center">
     <app-tab></app-tab>
<!--     <app-new-post></app-new-post>-->
<!--    <app-project></app-project>-->
   </v-row>
 </v-container>
</template>

<script>
// @ is an alias to /src
import homeTab from '../components/homeTab'

export default {
  name: 'Home',
  components: {
    'app-tab': homeTab
  }
}
</script>
