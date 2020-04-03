import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import CadastrarFuncionario from '../components/CadastroFuncionario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/funcionario',
    name: 'cadastrarFuncionario',
    component: 
      CadastrarFuncionario
    
    //component: () => import('../components/CadastroFuncionario.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
