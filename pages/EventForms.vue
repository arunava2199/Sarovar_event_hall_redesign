<template>
  <v-container>
    <HallBooking/>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Type of Event
        <small></small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey" class="mb-12" height="260px">

          <!-- Contents of "Types of Event"  -->

          <Radiobuttons/>

        </v-card>
        <v-btn color="primary" @click="e6 = 2">Confirm & Continue</v-btn>
        <!-- <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

      <!-- this section adds elements below v-card -->

      <v-stepper-step :complete="e6 > 2" step="2">Specifications</v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey" class="mb-12" height="640px">

          <!-- Contents of "Specifications"  -->

          <Dropdowns/>
          <Checkboxes/>




        </v-card>
        <v-btn color="primary" @click="e6 = 3">Confirm & Continue</v-btn>
        <!-- <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Hall Suggestions</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey" class="mb-12" height="450px">

          <!-- Contents of "Hall Suggestions"  -->

          <!-- <HorizontalCard/> -->

          <HallList/>
          <HallList/>



        </v-card>
        <v-btn color="primary" @click="e6 = 4">Confirm & Continue</v-btn>
        <!-- <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

      <v-stepper-step step="4">Optional Extras</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey" class="mb-12" height="260px">

            <Dropdowns2/>

            <form>
              <v-container

              <textarea> cols="30" rows="2">Type in your Queries.</textarea><br />
            </form>

        </v-card>
        <v-btn color="primary" @click="e6 = 5">Confirm & Continue</v-btn>
        <!-- <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

      <v-stepper-step step="5">Confirmation</v-stepper-step>
      <v-stepper-content step="5">
        <v-card color="grey" class="mb-12" height="500px">

          <!-- Contents of "Confirmation"  -->

          <ConfirmForm/>


        </v-card>
        <v-btn color="primary" @click="e6 = 1">Confirm</v-btn>
        <!-- <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

    </v-stepper>
  </v-container>
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

