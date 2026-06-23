<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img height="300px" :src="flower.src"></v-img>
          <v-card-text>
            <h1 class="text--primary mb-3">{{ flower.title }}</h1>
            <p>{{ flower.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    flower() {
      return this.$store.getters.flowerById(this.id)
    }
  }
}
</script>
