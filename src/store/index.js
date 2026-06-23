import Vue from 'vue'
import Vuex from 'vuex'
import flowers from './flowers'
import user from './user'
import shared from './shared'
import orders from './orders'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    flowers,
    user,
    shared,
    orders
  }
})

export default store