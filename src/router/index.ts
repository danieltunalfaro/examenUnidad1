import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import InformacionView from '../views/InformacionView.vue'
import CursosView from '../views/CursosView.vue'
import SoporteView from '../views/SoporteView.vue'

const routes = [
    {path:'/', name:'Inicio', component:InicioView},
    {path:'/Informacion', name:'Informacion', component:InformacionView},
    {path:'/Cursos', name:'Cursos', component:CursosView},
    {path:'/Soporte', name:'Soporte', component:SoporteView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router