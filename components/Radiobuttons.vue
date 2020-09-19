<template>
  <!-- <v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Birthdays" value="Birthdays"></v-radio>
      <v-radio label="Workshops" value="Workshops"></v-radio>
      <v-radio label="Weddings" value="Weddings"></v-radio>
      <v-radio label="Parties" value="Parties"></v-radio>
      <v-radio label="Launch Events" value="Launch Events"></v-radio>
      <v-radio label="Ceremonies" value="Ceremonies"></v-radio>
    </v-radio-group>
  </v-container> -->
</template>

// <script>
//   export default {
//     data () {
//       return {
//         radios: 'Choose One',
//       }
//     },
//   }
// </script>

// directional radio buttons

<template>
  <v-container fluid>

    <hr>
    <v-radio-group v-model="row" row>
      <v-radio label="Birthdays" value="radio-1"></v-radio>


      <v-radio label="Workshops" value="radio-2"></v-radio>


      <v-radio label="Parties" value="radio-3"></v-radio>

    </v-radio-group>

    <v-radio-group v-model="row" row>
      <v-radio label="Weddings" value="radio-4"></v-radio>


      <v-radio label="Launch Events" value="radio-5"></v-radio>


      <v-radio label="Ceremonies" value="radio-6"></v-radio>

    </v-radio-group>
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
