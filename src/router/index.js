import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '../views/PeopleList.vue'
import StarshipsList from '../views/StarshipsList.vue'
import PlanetsList from '../views/PlanetsList.vue'
import '@fortawesome/fontawesome-free/css/all.css'


const routes = [
  { path: '/', name: 'Home', component: PeopleList },
  { path: '/naves', name: 'Naves', component: StarshipsList },
  { path: '/planetas', name: 'Planetas', component: PlanetsList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
