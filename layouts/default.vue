<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">

    <!--Header -->
    <!-- <v-row justify="center" did not work -->
      <v-app-bar color="white" dark fixed app>
        <v-toolbar-title>Sarovar</v-toolbar-title>
        <!-- Component Example -->
          <Header/>

      </v-app-bar>
    <!-- </v-row> -->

    <!-- Body -->
    <v-content light>
      <nuxt />
      <button/>
      <HallBooking/>
    </v-content>

    <!-- Footer -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {}
</script>

<style>
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color:whitesmoke;
    color: black;
  }
</style>
