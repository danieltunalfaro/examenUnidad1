import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import InformacionView from '../views/InformacionView.vue'
import CursosView from '../views/CursosView.vue'
import SoporteView from '../views/SoporteView.vue'
import InscripcionView from '../views/InscripcionView.vue'
import CursoCompleto from '../views/CursoCompleto.vue'
import SeguridadPrivacidad from '../views/SeguridadPrivacidad.vue'

const routes = [
    {path:'/', name:'Inicio', component:InicioView},
    {path:'/Informacion', name:'Informacion', component:InformacionView},
    {path:'/Cursos', name:'Cursos', component:CursosView},
    {path:'/Soporte', name:'Soporte', component:SoporteView},
    {path:'/Inscripcion', name:'Inscrip', component:InscripcionView},
    {path:'/DetalleCurso', name:'DetalleCurso', component:CursoCompleto},
    {path:'/SeguridadPrivacidad', name:'Seguridad', component:SeguridadPrivacidad}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router