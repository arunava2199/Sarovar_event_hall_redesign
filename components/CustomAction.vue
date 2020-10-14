</template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
  <!-- max-width manipulates width of dialog box -->
  <!-- picture do not maintain aspect ratio -->
  <!-- comments inside cards didnt work -->
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      <v-row justify="left">
       Top western road trips
      </v-row>
    </v-card-title>
    <!-- "alligns" dont work most of the time -->

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <!-- <div v-show="show"> is the dropdown feature -->

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

</script>
  export default {
    data: () => ({
      show: false,
      //if "show" is "true", dropdown does not wait for user to click on arrow, opens as soon as page opens
    }),
  }
</script>
