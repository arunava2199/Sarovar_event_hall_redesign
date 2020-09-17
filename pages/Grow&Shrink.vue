<template>
  <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 3"
        :key="n"
      >
        <!-- {v-for="n in 4"} increases the number of columns -->
        <v-card
          class="pa-2"
          tile
          outlined
        >
          col
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        v-for="n in 2"
        :key="n"
        :cols="n === 1 ? 8 : 4"
      >
        <!-- {}:cols="n === 1 ? 8 : 4"} -> if n=1 use=? 8 else=: use 4 -->
        <!-- {}:cols="n === 1 ? 8 : 4"} -> Controls width of the specified row -->

        <v-card
          class="pa-2"
          tile
          outlined
        >
          col-{{ n === 1 ? 8 : 4 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
