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
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>