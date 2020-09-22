<template>
  <v-container class="grey lighten-5">
   <v-row
      no-gutters
      >
      <v-col
      v-for="j in 3"
      :key=j
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
        >

          <!-- <v-card-text>
            top row
          </v-card-text> -->


          <img
            src="sweden.png"
            width="380px"
            class="mx-a"
          >

        </v-card>

      </v-col>
    </v-row>

   <v-row
      no-gutters
      >
      <v-col
      v-for="j in 2"
      :key=j
      cols="12"
      md="6"
      >

        <v-card
          class="purple lighten-3 pa-3"
        >
          <v-card-text>
            Centered
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
