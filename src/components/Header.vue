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
      <span class="mx-3">Bonface Kamata</span>
      <v-avatar x-small>
        <img
          src="https://media.istockphoto.com/photos/senior-man-smiling-picture-id93293890?k=20&m=93293890&s=170667a&w=0&h=XV-aZI0Dc3vjbPBXwG8OI2LT-djsTP_YsvmMVCqJU0s="
          alt="Bonface Kamata"
        />
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
