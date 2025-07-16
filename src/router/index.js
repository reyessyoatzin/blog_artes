import { createRouter, createWebHistory } from 'vue-router'  //copiar esto
import Quienesomos from '@/views/Quienesomos.vue'
import CategoriaView from '@/views/categoriaView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import contactoView from '@/views/contacto.vue'
import DetailsTarjeta from '@/views/DetailsTarjeta.vue'


const routes = [
   { path: '/',name: 'Inicio', component: HelloWorld },
   { path: '/quienesomos', name: 'quienesomos', component: Quienesomos },
  { path: '/categoriaView', name: 'categoriaView', component: CategoriaView },
  { path: '/contacto', name: 'contactoView', component: contactoView },
  { path: '/detalle/:id', name: 'DetailsTarjeta', component: DetailsTarjeta },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
