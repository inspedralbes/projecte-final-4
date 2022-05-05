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