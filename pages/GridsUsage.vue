<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="8"
        md="4"
        xs="6"
      >
      <!-- md=4 -> 3 columns repeated 4 times -->
        <v-card
          class="pa-2"
          outlined
          tile

        >
          yolo
        </v-card>

      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="8"
        md="4"
        xs="6"
      >
      <!-- md=4 -> 3 columns repeated 4 times -->
        <v-card
          class="pa-2"
          outlined
          tile

        >
          yolo
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
