import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlowerListView from '../views/Flowers/FlowerListView.vue'
import FlowerView from '../views/Flowers/FlowerView.vue'
import NewFlowerView from '../views/Flowers/NewFlowerView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegistrationView from '../views/Auth/RegistrationView.vue'
import OrdersView from '../views/User/OrdersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/flower/:id",
    name: "flower",
    component: FlowerView,
    props: true
  },
  {
    path: "/list",
    name: "list",
    component: FlowerListView
  },
  {
    path: "/new",
    name: "new",
    component: NewFlowerView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router