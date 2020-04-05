<template id="cadastroFuncionario">

  <div>

    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Cadastro de colaborador</h1>
          </div>
        </main>
      </div>
    </div>

    <div class="container">

      <p class="mb-5"></p>        
      <form class="needs-validation" novalidate>

        <div class="form-group row text-center">
          <label for="name" class="col-sm-3 col-form-label font-weight-bold">Nome completo</label>

          <div class="col-md-6 mb-3">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="material-icons iconStyle2">perm_identity</i></span>
                </div>
                <input type="text" class="form-control" id="name" placeholder="Nome completo" value="" required>
                <div class="invalid-feedback">
                  Nome é obrigatório
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="form-group row text-center">
          <label for="apelido" class="col-sm-3 col-form-label font-weight-bold">Apelido</label>

          <div class="col-md-6 mb-3">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="material-icons iconStyle2">face</i></span>
                </div>
                <input type="text" class="form-control" id="apelido" placeholder="Apelido" required>
                <div class="invalid-feedback" style="width: 100%;">
                  Apelido é obrigatório.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group row text-center">
          <label for="dataNascimento" class="col-sm-3 col-form-label font-weight-bold">Data de nascimento</label>
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="material-icons iconStyle2">date_range</i></span>
                </div>
                <input class="form-control" type="date" value="2011-08-19" id="dataNascimento">
              </div>
            </div>
          </div>
        </div>
        
        <div class="form-group row text-center">
          <label for="cor" class="col-sm-3 col-form-label font-weight-bold">Cor favorita</label>
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="material-icons iconStyle2">palette</i></span>
                </div>
                <input type="color" class="form-control" id="cor" placeholder="RGB" value="" required>
                <div class="invalid-feedback">
                  Cor favorita é obrigatório
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group row text-center">
          <label for="foto" class="col-sm-3 col-form-label font-weight-bold">Foto</label>
          <div class="col-md-6 mb-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="material-icons iconStyle2">add_a_photo</i></span>
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="foto" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" align="left" for="foto">Importe uma foto</label>
              </div>
            </div>
          </div>
        </div>
        
        <div class="form-group row text-center">
          <label for="status" class="col-sm-3 col-form-label font-weight-bold">Status</label>
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <div class="btn-group btn-group-toggle btn-block" data-toggle="buttons">
                <label class="btn btn-secondary active">
                  <input type="radio" name="options" id="status" autocomplete="off" checked> Ativo
                </label>
                <label class="btn btn-secondary">
                  <input type="radio" name="options" id="status" autocomplete="off"> Inativo
                </label>
              </div>
            </div>                        
          </div>
        </div>
        
        <hr class="mb-4">
        <button class="btn btn-secondary btn-lg btn-block" type="submit">Salvar</button>
      </form>
    </div>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2019 Grupo de Estudos</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
  </div>
  
</template>

<script>

  import Vue from 'vue'
  import Funcionarios from '../services/funcionarios'

  var CadastroFuncionario = Vue.component('cadastroFuncionario', {
    template: '#cadastroFuncionario',
    data() {
      return []
    }
  })

export default {

  data() {
    return {
      funcionarios: []
    }
  },

  mounted() {
    Funcionarios.listar().then(response => {
      console.log(response.data)
      this.funcionarios = response.data;
    })
  },

  name: 'CadastroFuncionario',
  props: {
    CadastroFuncionario
  }
}
</script>

<style scoped>
  .container {
    max-width: 960px;
  }

  .border-top { border-top: 1px solid #e5e5e5; }
  .border-bottom { border-bottom: 1px solid #e5e5e5; }
  .border-top-gray { border-top-color: #adb5bd; }

  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

  .lh-condensed { line-height: 1.25; }
</style>
