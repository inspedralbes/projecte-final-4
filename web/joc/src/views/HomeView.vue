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
    <div class="row">

    <div class="col s12 m4 l8">
     <h1 id="lletres"></h1>
    <div class="row main-container center-align">
      <div class="col s12 center-align">
        <joc />
      </div>

    </div>
    </div>
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
#count_up_timer{
  padding: 50%;
  font-size: 100px;
}

</style>