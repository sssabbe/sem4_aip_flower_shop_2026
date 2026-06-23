<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">My Flowers</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" offset="2">
        <v-card v-for="flower in myFlowers" :key="flower.id" class="mb-3" max-width="1000">
          <v-row>
            <v-col xs="4">
              <v-img :src="flower.src" height="175px" cover></v-img>
            </v-col>
            <v-col xs="8">
              <h2 class="text--primary">{{ flower.title }}</h2>
              <p style="height: 85px; overflow: hidden; text-overflow: ellipsis;">{{ flower.desc }}</p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" variant="text" :to="'/flower/' + flower.id">
                  Open
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myFlowers() {
      return this.$store.getters.myFlowers
    }
  }
}
</script>
