<template>
  <v-container class="grey">
   <v-row
      no-gutters
      >
      <v-col
      v-for="x in 3"
      :key= x
      cols="4"
      sm="4"
      >


      <v-card
        class="pa-md-4 pa-sm-4 pa-xs-2 ma-md-8 ma-sm-4 ma-xs-4"
        color="black"
        width="300px"
      >
        <v-card-text class="red--text">
          Adjust screen size to see spacing changes
        </v-card-text>
      </v-card>


      </v-col>
    </v-row>


  </v-container>
</template>
