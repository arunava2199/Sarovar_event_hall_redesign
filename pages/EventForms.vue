<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Type of Event
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="whitesmoke" class="mb-12" height="200px">

        <!-- Contents of "Types of Event"  -->

       <Spacingb/>
       <Spacingw/>

      </v-card>
      <v-btn color="primary" @click="e6 = 2">Confirm & Continue</v-btn>
      <!-- <v-btn text>Cancel</v-btn> -->
    </v-stepper-content>

    <!-- adds stuff below v-card -->

    <v-stepper-step :complete="e6 > 2" step="2">Specifications</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="whitesmoke" class="mb-12" height="300px">

        <!-- Contents of "Specifications"  -->

        <Menu/>

      </v-card>
      <v-btn color="primary" @click="e6 = 3">Confirm & Continue</v-btn>
      <!-- <v-btn text>Cancel</v-btn> -->
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Hall Suggestions</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="whitesmoke" class="mb-12" height="200px">

        <!-- Contents of "Hall Suggestions"  -->



      </v-card>
      <v-btn color="primary" @click="e6 = 4">Confirm & Continue</v-btn>
      <!-- <v-btn text>Cancel</v-btn> -->
    </v-stepper-content>

    <v-stepper-step step="4">Optional Extras</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="whitesmoke" class="mb-12" height="200px">

        <!-- Contents of "Optional Extras"  -->
      </v-card>
      <v-btn color="primary" @click="e6 = 5">Confirm & Continue</v-btn>
      <!-- <v-btn text>Cancel</v-btn> -->
    </v-stepper-content>

    <v-stepper-step step="5">Confirmation</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="whitesmoke" class="mb-12" height="200px">

        <!-- Contents of "Confirmation"  -->



      </v-card>
      <v-btn color="primary" @click="e6 = 1">Confirm & Continue</v-btn>
      <!-- <v-btn text>Cancel</v-btn> -->
    </v-stepper-content>

  </v-stepper>
</template>

// add scripts in sequence

<script>
    // script for stepper form
  export default {
    data () {
      return {
        e6: 1,
      }
    },
  }
</script>

