<script>
import "materialize-css";
import joc from "../components/joc.vue";


export default {
  components: {
    joc,
  
  },

  
};
</script>

<template>
<div>
  <nav class="#66bb6a green lighten-1">
    <div class="nav-wrapper">
      <img src="src/components/img/logo2.png" alt="Girl in a jacket" width="100" height="70">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Estadistiques</a></li>
        <li><a href="#">Ajustes</a></li>
        <li><a href="#">Puntuacións</a></li>
      </ul>
    </div>
  </nav>
    <main>
    <div class="row">
    
    <div class="col s12 m4 l2"><p></p></div>
    <div class="col s12 m4 l8">
     <h1 id="lletres"></h1>
    <div class="row main-container center-align">
      <div class="col s12 center-align">
        <joc />
      </div>

    </div>
    </div>
    <div class="col s12 m4 l2"><p></p></div>
  </div>
   
  </main>
</div>

</template>

<style>
.col-grid {
  border: 2px solid black;
 
}
.col{
   height: 100px;
  width: 50px;
}


</style>