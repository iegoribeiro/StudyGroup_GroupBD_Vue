<template>
  <div id="app">
    <div>
      <header-view></header-view>
      <sidebar-view></sidebar-view>
      <router-view/>
    </div>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Dashboard</router-link> |
      <router-link to="/funcionario">Cadastrar funcionario</router-link> -->
    <!-- </div> -->
  </div>
  
</template>

<script>
  // import Vue from 'vue'
  import HeaderView from '@/views/HeaderView'
  import SidebarView from '@/views/SidebarView'
  
  export default {
    name: 'app',
    components: {
      HeaderView,
      SidebarView
    }
  }
</script>
