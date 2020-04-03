<template>
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
</template>