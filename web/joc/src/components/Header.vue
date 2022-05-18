<template>
  <nav class="#66bb6a green lighten-1">
    <div class="nav-wrapper">
        <a href="/">
         <img alt="Qries" src="./img/logo2.png" width="100" height="70">
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><RouterLink :to="'/puntuacions'"  >Puntuacions</RouterLink></li>
        <li><a href="#">Ajustes</a></li>
        <li><a href="#">Estadistiques</a></li>
        <li><a class="modal-trigger" href="#modal1">Admin</a></li>
      </ul>
    </div>
     <div class="container">
            <!-- Modal Structure -->
            <div id="modal1" class="modal #66bb6a green lighten-1">
                <div class="modal-content">
                      <div class="row">
                            <form class="col s12">
                              <h1 class="negro">Administrador</h1>
                              <div class="row">
                                <div class="input-field col s6">
                                  <i class="material-icons prefix">account_circle</i>
                                  <input id="icon_prefix" type="text" class="validate">
                                  <label for="icon_prefix">Usuario</label>
                                </div>
                                <div class="input-field col s6">
                                  <i class="material-icons prefix">phone</i>
                                  <input id="icon_telephone" type="password" class="validate">
                                  <label for="icon_telephone">Contraseña</label>
                                </div>
                              </div>
                            </form>
                        </div>
                </div>
                <div class="modal-footer #66bb6a green lighten-1">
                    <a href="#!" class="modal-action modal-close waves-effect waves-light btn">Iniciar Sesión</a>
                </div>
                <div class="modal-footer #66bb6a green lighten-1">
                    <a href="#!" class="modal-action modal-close waves-effect waves-light btn">Continuar</a>
                </div>
            </div>
       </div>
  </nav>
</template>

<script>

export default {
mounted() {
     document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

},
}
</script>

<style>
.negro{
  color: black;
}
</style>