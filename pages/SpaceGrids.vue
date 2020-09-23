<template>
  <v-container class="grey lighten-5">
   <v-row
      no-gutters
      >
      <!-- Birthdays radio button -->
      <v-col
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
          max-width="200px"
        >

          <v-radio-group>
            <v-radio label="Birthdays" value="radio-1" ></v-radio>

          </v-radio-group>


        </v-card>

      </v-col>

      <!-- Workshops radio button -->
      <v-col
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
          max-width="200px"
        >

          <v-radio-group>
            <v-radio label="Workshops" value="radio-2" ></v-radio>

          </v-radio-group>


        </v-card>

      </v-col>

      <!-- Parties radio button -->
      <v-col
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
          max-width="200px"
        >

          <v-radio-group>
            <v-radio label="Parties" value="radio-3" ></v-radio>

          </v-radio-group>


        </v-card>

      </v-col>
    </v-row>

      <v-row
      no-gutters
      >
      <!-- Birthdays radio button -->
      <v-col
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
          max-width="200px"
        >

          <v-radio-group>
            <v-radio label="Weddings" value="radio-4" ></v-radio>

          </v-radio-group>


        </v-card>

      </v-col>

      <!-- Workshops radio button -->
      <v-col
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
          max-width="200px"
        >

          <v-radio-group>
            <v-radio label="Launch Events" value="radio-5" ></v-radio>

          </v-radio-group>


        </v-card>

      </v-col>

      <!-- ceremonies radio button -->
      <v-col
      cols="4"
      md="4"
      >

        <v-card
          class="grey"
          max-width="200px"
        >

          <v-radio-group>
            <v-radio label="Ceremonies" value="radio-6" ></v-radio>

          </v-radio-group>


        </v-card>

      </v-col>
    </v-row>


  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        column: null,
        row: null,
      }
    },
  }
</script>














// <v-row
//       no-gutters
//       >
//       <v-col
//       v-for="j in 2"
//       :key=j
//       cols="12"
//       md="6"
//       >

//         <v-card
//           class="purple lighten-3 pa-3"
//         >
//           <v-card-text>
//             Centered
//           </v-card-text>
//         </v-card>

//       </v-col>
//     </v-row>
