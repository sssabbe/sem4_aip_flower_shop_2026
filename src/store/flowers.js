export default {
  state: {
    flowers: [
      {
        title: "Нежные пионы",
        desc: "Роскошные пионы для особого случая",
        promo: true,
        src: "https://cdn.pixabay.com/photo/2018/08/12/15/29/peonies-3602118_640.jpg",
        id: "1",
        userId: "1"
      },
      {
        title: "Белые розы",
        desc: "Элегантные белые розы",
        promo: true,
        src: "https://cdn.pixabay.com/photo/2017/08/12/18/20/rose-2634660_640.jpg",
        id: "2",
        userId: "1"
      },
      {
        title: "Лавандовое поле",
        desc: "Ароматная лаванда",
        promo: true,
        src: "https://cdn.pixabay.com/photo/2016/06/29/13/04/lavender-1486854_640.jpg",
        id: "3",
        userId: "2"
      },
      {
        title: "Красные розы",
        desc: "Классические красные розы",
        promo: true,
        src: "https://cdn.pixabay.com/photo/2016/07/11/15/19/rose-1509437_640.jpg",
        id: "4",
        userId: "2"
      },
      {
        title: "Тюльпаны",
        desc: "Весенние тюльпаны",
        promo: false,
        src: "https://cdn.pixabay.com/photo/2017/01/21/13/20/tulips-1997226_640.jpg",
        id: "5",
        userId: "1"
      },
      {
        title: "Гортензии",
        desc: "Пышные голубые гортензии",
        promo: false,
        src: "https://cdn.pixabay.com/photo/2019/07/12/16/53/hydrangea-4332911_640.jpg",
        id: "6",
        userId: "1"
      }
    ]
  },
  mutations: {
    createFlower(state, payload) {
      state.flowers.push(payload)
    },
    updateFlower(state, payload) {
      const index = state.flowers.findIndex(flower => flower.id === payload.id)
      if (index !== -1) {
        state.flowers[index].title = payload.title
        state.flowers[index].desc = payload.desc
      }
    }
  },
  actions: {
    createFlower({commit, getters}, payload) {
      payload.id = Math.random().toString()
      payload.userId = getters.user != null ? getters.user.id : '1'
      commit('createFlower', payload)
    },
    updateFlower({commit}, payload) {
      commit('updateFlower', payload)
    }
  },
  getters: {
    flowers(state) {
      return state.flowers
    },
    promoFlowers(state) {
      return state.flowers.filter(flower => flower.promo)
    },
    myFlowers(state, getters) {
      if (getters.user == null) return []
      return state.flowers.filter(flower => flower.userId === getters.user.id)
    },
    flowerById(state) {
      return id => {
        return state.flowers.find(flower => flower.id === id)
      }
    }
  }
}