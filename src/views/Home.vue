<template>
 <v-container class="container is-fluid">
   <v-row class="text-center">
    <app-project></app-project>
   </v-row>
 </v-container>
</template>

<script>
// @ is an alias to /src
import Project from '../components/Project'

export default {
  name: 'Home',
  components: {
    'app-project': Project
  }
}
</script>
