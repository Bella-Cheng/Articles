import { createWebHistory, createRouter } from 'vue-router'
import MainLayout from '../views/MainLayout.vue'
import HomePage from '../views/HomePage.vue'
import ShopCart from '../views/bag/ShopCart.vue'
import Login from '../views/login/Login.vue'


const routes = [
  { 
    path: '/',
    name: 'Nav + Footer',
    component: MainLayout,
    children:[
      { 
        path: '',
        name: 'home',
        component: HomePage
      },
      // {
      //   path: 'articles/figure',
      //   name: '人物',
      //   component: figure
      // },
      // {
      //   path: 'articles',
      //   name: '文章',
      //   component: articles
      // },
      // {
      //   path: 'features',
      //   name: '專題',
      //   component: features
      // },
      // {
      //   path: 'podcasts',
      //   name: '聲音',
      //   component: podcasts
      // },
      // {
      //   path: 'magazines',
      //   name: '雜誌',
      //   component: magazines
      // },
      // {
      //   path: 'articles/tag/vibes',
      //   name: 'VIBES',
      //   component: vibes
      // },
      // {
      //   path: 'shop/cool-stuff',
      //   name: 'vshop',
      //   component: vshop
      // },
      // {
      //   path: 'shop/subscription/one-year-plan',
      //   name: '訂閱VERSE雜誌',
      //   component: subscription
      // },
      {
        path: 'login',
        name: '登入',
        component: Login
      },
      // {
      //   path: 'register',
      //   name: '註冊',
      //   component: register
      // },
      {
        path: 'bag',
        name: '購物袋',
        component: ShopCart
      },
      // {
      //   path: 'member',
      //   name: '成員',
      //   component: member
      // },

    ]
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes,
})

export default router