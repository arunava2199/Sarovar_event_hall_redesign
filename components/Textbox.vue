<template>
  <v-form>
    <v-container>
      <v-row>


        <v-col
          cols="12"
          sm="6"
        >
        <!-- Bold Heads -->
         <h2 class="black--text">Queries? Contact Us...</h2>

          <!-- Normal sized heads -->
         <p class="black--text">E-mail / Phone Number</p>
          <v-text-field
            label="example@gmail.com / 98xxxxxxxx"
            single-line
            outlined
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row

        <v-col
          cols="12"
          sm="6"
        >
        <p class="black--text">Queries</p>
          <v-text-field
            label="Type here..."
            single-line
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
