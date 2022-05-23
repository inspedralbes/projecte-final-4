<script>
import "materialize-css";
import joc from "../components/joc.vue";
import Header from '../components/Header.vue';


export default {
  components: {
    joc,
    Header,
  
  },

};

</script>

<template>
<div>
  <Header/>
    <main>
    <div class="row center-align">

    <div class="col s12 center-align">
     <h1 id="lletres"></h1>
    <div class="row main-container center-align">
      <div class="col s3 center-align ocultar-movil">
       
      </div>
      <div class="col s6 center-align masgrande-movil">
        <joc />
      </div>
      <div class="col s3 center-align ocultar-movil">
       
      </div>

    </div>
    </div>
  </div>
   
  </main>
</div>

</template>

<style>
@media screen and (min-width: 200px) and (max-width: 800px) { 
  .ocultar-movil {
  display: none;
}
 }
@media screen and (min-width: 200px) and (max-width: 800px) { 
  .masgrande-movil {
      width: 100% !important;
    margin-left: auto !important;
    left: auto !important;
    right: auto !important;
}
 }



.col-grid {
  border: 2px solid black;
 
}
.col{
   height: 100px;
  width: 50px;
}
#count_up_timer{
  padding: 50%;
  font-size: 100px;
}

</style>