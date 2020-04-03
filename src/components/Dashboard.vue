<template id="dashboard">
  <div class="Dashboard">
    <div>
      <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0 identidadeVisual">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">GRUPO D | Sem o D</a>
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span class="material-icons iconStyle">home</span>
                    Dashboard <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span class="material-icons iconStyle">group</span>
                    Equipe
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span class="material-icons iconStyle">widgets</span>
                    Projetos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span class="material-icons iconStyle">assignment</span>
                    Relatórios
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Administração</span>
                <a class="d-flex align-items-center text-muted" href="#">
                    <!-- <span class="material-icons iconStyle">add_circle_outline</span> -->
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#/funcionario">
                    <span class="material-icons iconStyle2">group_add</span>
                    Cadastrar colaborador
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-outline-secondary">Share</button>
                  <button class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // import router from '../router/index.js'
  // import Vue from 'vue'

  export default {

    name: 'Dashboard',
    props: {
    }
  }
</script>

<style scoped>
  body {
    font-size: .875rem;
  }

  .iconStyle {
    width: 25px;
    height: 24px;
    vertical-align: text-bottom;
  }

  .iconStyle2 {
    width: 25px;
    height: 20px;
    vertical-align: text-top;
  }

  /*
  * Sidebar
  */

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 48px; /* Height of navbar */
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  
  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  /* .sidebar .nav-link.active {
    color: #007bff;
  } */

  .sidebar .nav-link:hover .iconStyle,
  .sidebar .nav-link:hover .iconStyle2,
  .sidebar .nav-link.active {
    color: rgba(150, 75, 0, 1);
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }

  /*
  * Navbar
  */
  .identidadeVisual {
    background-color: rgba(150, 75, 0, 1);  
  }

  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgb(48, 27, 10);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }

  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }

  /*
  * Utilities
  */

  .border-top { border-top: 1px solid #e5e5e5; }
  .border-bottom { border-bottom: 1px solid #e5e5e5; }
</style>
