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
        <li><a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a></li>
      </ul>
    </div>
     <div class="container">
            <!-- Modal Structure -->
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
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

</style>