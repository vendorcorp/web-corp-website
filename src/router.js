import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tickets from './views/Tickets.vue'
import Venues from './views/Venues.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import TensorflowTrainer from './views/TensorflowTrainer.vue'
import test from './views/CardsTemplate.vue'




Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Tickets',
      name: 'Tickets',
      component: Tickets
    },
    {
      path: '/Venues',
      name: 'Venues',
      component: Venues
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/TensorflowTrainer',
      name: 'TensorflowTrainer',
      component: TensorflowTrainer
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    
    
    
  ]
})
