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
            <v-img :src="flower.src" height="250px" cover></v-img>
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
          title: "Нежные пионы",
          desc: "Роскошные пионы для особого случая",
          promo: true,
          src: "https://cdn.pixabay.com/photo/2018/08/12/15/29/peonies-3602118_640.jpg",
          id: "1"
        },
        {
          title: "Белые розы",
          desc: "Элегантные белые розы",
          promo: true,
          src: "https://cdn.pixabay.com/photo/2017/08/12/18/20/rose-2634660_640.jpg",
          id: "2"
        },
        {
          title: "Лавандовое поле",
          desc: "Ароматная лаванда",
          promo: true,
          src: "https://cdn.pixabay.com/photo/2016/06/29/13/04/lavender-1486854_640.jpg",
          id: "3"
        },
        {
          title: "Красные розы",
          desc: "Классические красные розы",
          promo: true,
          src: "https://cdn.pixabay.com/photo/2016/07/11/15/19/rose-1509437_640.jpg",
          id: "4"
        },
        {
          title: "Тюльпаны",
          desc: "Весенние тюльпаны",
          promo: false,
          src: "https://cdn.pixabay.com/photo/2017/01/21/13/20/tulips-1997226_640.jpg",
          id: "5"
        },
        {
          title: "Гортензии",
          desc: "Пышные голубые гортензии",
          promo: false,
          src: "https://cdn.pixabay.com/photo/2019/07/12/16/53/hydrangea-4332911_640.jpg",
          id: "6"
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