<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="/">
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
</template>

<style scoped>

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

</style>
