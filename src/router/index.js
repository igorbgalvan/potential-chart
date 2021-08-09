import Vue from 'vue'
import Router from 'vue-router'
import PotentialChart from '@/components/PotentialChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PotentialChart',
      component: PotentialChart
    }
  ]
})
