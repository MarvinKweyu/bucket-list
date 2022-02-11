<template>
  <div class="d-flex justify-space-between">
    <v-text-field
      label="Search..."
      outlined
      rounded
      dense
      class="col-6"
      color="grey"
    ></v-text-field>

    <div>
      <span class="mx-3">Marvin Kweyu</span>
      <v-avatar x-small>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      goDark: false
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: 'Josefin Sans', sans-serif;
  color: darkolivegreen;
}
</style>
