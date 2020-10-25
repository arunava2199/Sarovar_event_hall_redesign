<template>
    <v-container id="dropdown-example">
      <v-row>


        <v-col cols="12" sm="4">

        <!-- dropdowns for catering -->

          <v-checkbox color="white"
          <h3 class="black--text">Number of Tables</h3>
          <v-overflow-btn
            class="my-2"
            editable
            :items="dropdown_edit"
            label="Options"
            item-value="text"
          ></v-overflow-btn>
        </v-col>
      </v-row>

      <!-- dropdowns for stewards -->

      <v-row>
        <v-col cols="12" sm="4">
          <h3 class="black--text">Number of Chairs</h3>

          <v-overflow-btn
            class="my-2"
            editable
            :items="steward_number"
            label="Options"
            item-value="text"
          ></v-overflow-btn>
        </v-col>
      </v-row>

      <!-- dropdowns for sound equipment -->

      <v-row>
        <v-col cols="12" sm="4">
          <h3 class="black--text">Number of Screens</h3>

          <v-overflow-btn
            class="my-2"
            editable
            :items="sound"
            label="Options"
            item-value="text"
          ></v-overflow-btn>
        </v-col>
      </v-row>

    </v-container>
</template>

<script>

  // To call data you need to put everything between these brackets []

  export default {
    data: () => ({

      dropdown_edit: [
        { text: '20-30' },
        { text: '30-40' },
        { text: '40-50' },
      ],
      steward_number: [
        { text: '20-30' },
        { text: '30-40' },
        { text: '40-50' },
      ],
      sound: [
        { text: '2' },
        { text: '4' },
        { text: '8' },
      ],
    }),
  }


</script>

