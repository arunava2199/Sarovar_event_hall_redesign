<template>
  <v-card class="col-12 ml-0" color="blue" max-height="300px" md="4">
    <v-container class="ml-2">
      <v-row justify="space-between">
        <v-col cols="12"
        md="5"
        >
            <v-carousel height="200">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
        </v-col>

        <!-- card for name and address text -->
        <!-- remove elevation -->
       <v-col>
          <v-card color="blue"
            max-width="190px"
            max-height="300"
            elevation="0"
          >
            <v-container>
              <h3>Sarovar Portico</h3><br/>
              <h4 class="black--text">Carol Bagh, New Delhi</h4>
            </v-container>
          </v-card>
       </v-col>

        <!-- card for availability text -->
        <
       <v-col>
          <v-card color="blue"
            max-width="190px"
            max-height="300"
            elevation="0"
            ml="10"
          >
            <v-container>
              <h3>Availability</h3><br/>
              <v-card outlined>
                <v-card-text>Available for 5 hours</v-card-text>

              </v-card>
            </v-container>
          </v-card>
       </v-col>

       <!-- card for availability text -->

       <v-col>
          <v-card color="blue"
            max-width="190px"
            max-height="300"
            elevation="0"
            ml="10"
          >
            <v-container>

            <h3>Specifications</h3><br/>
              <v-card outlined>
                <v-icon class="mx-2">mdi-account</v-icon>
                <v-card-text>40-50</v-card-text>
                <v-card-text>Air Conditioning available</v-card-text>

              </v-card>

            </v-container>
          </v-card>
       </v-col>


        <!-- card for icons text -->
        <v-col
          cols="auto"
          class="text-center pl-0">
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">

                <v-icon></v-icon>

            </v-col>

            <v-col class="px-0">

                <v-icon></v-icon>

            </v-col>

            <v-col class="px-0">
              <div class="my-2">
                <v-btn elevated small color="indigo">Choose</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
