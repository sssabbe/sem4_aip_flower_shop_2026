<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item 
              v-for="flower in promoFlowers" 
              :key="flower.id" 
              :src="flower.src"
            >
              <div class="flower-link">
                <v-btn class="error" :to="'/flower/' + flower.id">
                  {{ flower.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="flower in flowers" :key="flower.id">
          <v-card>
            <v-img :src="flower.src" height="200px"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ flower.title }}</h3>
                <div>{{ flower.desc }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/flower/' + flower.id">Open</v-btn>
              <v-btn raised color="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flowers: [
        {
          title: "Красные розы",
          desc: "Красивый букет красных роз",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1"
        },
        {
          title: "Белые лилии",
          desc: "Нежные белые лилии",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2"
        },
        {
          title: "Тюльпаны",
          desc: "Весенние тюльпаны",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3"
        },
        {
          title: "Пионы",
          desc: "Роскошные пионы",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4"
        }
      ]
    }
  },
  computed: {
    promoFlowers() {
      return this.flowers.filter(flower => flower.promo)
    }
  }
}
</script>

<style scoped>
.flower-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0,0,0,0.5);
  transform: translate(-50%,0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>