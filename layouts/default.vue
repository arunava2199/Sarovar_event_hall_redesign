<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">

    <!--Header -->
    <!-- <v-row justify="center" did not work -->

        <!-- Component Example -->
          <Header/>


      </v-app-bar>
    <!-- </v-row> -->


    <!-- Body -->
    <v-content light>
      <nuxt />
      <button/>

    </v-content>


    <!-- Footer -->


      <Footer/>


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
