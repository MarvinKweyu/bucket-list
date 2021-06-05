<template>
  <v-container justify="center">
    <v-row justify="center">
      <div>
        <p class="display-4 text-center">404</p>
        <p class="headline text-center mx-auto">
          It's not you, it's us. It seemes we do not have the the path you have
          requested
        </p>
      </div>
    </v-row>

    <v-row justify="center">
      <v-icon size="100" class="text-center" @click="goHome()">mdi-home</v-icon>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      this.$router.push({ name: 'todoItems' })
    }
  }
}
</script>
