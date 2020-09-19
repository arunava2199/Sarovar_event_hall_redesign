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
      </v-col>

      <v-col cols="12" sm="4">
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
        <p>Estimated Number of People</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Editable Btn"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      // dropdown_font: ['20-30', '30-40', '40-50'],
      // dropdown_icon: [
      //   { text: 'list', callback: () => console.log('list') },
      //   { text: 'favorite', callback: () => console.log('favorite') },
      //   { text: 'delete', callback: () => console.log('delete') },
      // ],
      dropdown_edit: [
        { text: '20-30' },
        { text: '30-40' },
        { text: '40-50' },

      ],
    }),
  }
</script>
