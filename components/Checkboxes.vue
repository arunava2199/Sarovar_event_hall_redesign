<template>
  <v-container fluid>
    <v-checkbox v-model="checkbox1" :label="`Number of Tables: ${checkbox1.toString()}`"></v-checkbox>

      <!-- dropdowns -->
      <template>
        <v-container id="dropdown-example">
          <v-row>
            <!-- <v-col cols="12" sm="4">
              <p>Estimated Number of People</p>

              <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="Overflow Btn"
                target="#dropdown-example"
              ></v-overflow-btn>
            </v-col> -->


            <!-- <v-col cols="12" sm="4">


              <p>Segmented</p>

              <v-overflow-btn
                class="my-2"
                :items="dropdown_icon"
                label="Segmented Btn"
                segmented
                target="#dropdown-example"
              ></v-overflow-btn>
            </v-col> -->

            <v-col cols="12" sm="4">
              <p>Number of Tables</p>

              <v-overflow-btn
                class="my-2"
                :items="table_numbers"
                label="Editable Btn"
                editable
                item-value="text"
              ></v-overflow-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>

    <v-checkbox v-model="checkbox2" :label="`Number of Chairs: ${checkbox2.toString()}`"></v-checkbox>

      <!-- dropdowns -->
      <template>
        <v-container id="dropdown-example">
          <v-row>
            <!-- <v-col cols="12" sm="4">
              <p>Estimated Number of People</p>

              <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="Overflow Btn"
                target="#dropdown-example"
              ></v-overflow-btn>
            </v-col> -->


            <!-- <v-col cols="12" sm="4">


              <p>Segmented</p>

              <v-overflow-btn
                class="my-2"
                :items="dropdown_icon"
                label="Segmented Btn"
                segmented
                target="#dropdown-example"
              ></v-overflow-btn>
            </v-col> -->

            <v-col cols="12" sm="4">
              <p>Number of Chairs</p>

              <v-overflow-btn
                class="my-2"
                :items="dropdown_edit"
                label="Editable Btn"
                editable
                item-value="numbers"
              ></v-overflow-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dropdown_edit: [
        { text: '20-30' },
        { text: '30-40' },
        { text: '40-50' },
      ],
    }),
  }
</script>

<script>
  export default {
    data: () => ({
      table_numbers: [
        { text: '20-30' },
        { text: '30-40' },
        { text: '40-50' },
      ],
    }),
  }
</script>

<script>
  export default {
    data () {
      return {
        checkbox1: false,
        checkbox2: true,
      }
    },
  }
</script>


