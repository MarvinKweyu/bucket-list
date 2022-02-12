<template>
  <v-row>
    <v-col class="col-2 nav pl-4">
      <div class="text-center">
        <v-avatar size="81">
          <img
            src="https://res.cloudinary.com/dlxhllkxl/image/upload/v1634286383/Portifolio/bucket-list_yhf90m.png"
            alt="TheBucketList"
          />
        </v-avatar>
        <h2>The BucketList</h2>
      </div>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/">
              <v-icon>mdi-home</v-icon>
              <span class="ml-1">Home</span>
            </router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <router-link :to="{ name: 'tags' }">
              <v-icon>mdi-format-list-bulleted-square</v-icon>
              <span class="ml-1">Tags</span>
            </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link :to="{ name: 'about' }">
              <v-icon>mdi-information-outline</v-icon>
              <span class="ml-1">About</span>
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col class="col-10">
      <Header />

      <router-view></router-view>
    </v-col>
  </v-row>

  <!-- <Footer /> -->
</template>

<script>
// import { mapActions } from 'vuex'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Header
    // Footer
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat Alternates', sans-serif !important;
}

.nav {
  border-right: 1px solid teal;
}
</style>
