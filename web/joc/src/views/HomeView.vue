<script>
import "materialize-css";
import lletres from "../components/lletres.vue";
import joc from "../components/joc.vue";
import teclat from "../components/teclat.vue";


export default {
  components: {
    lletres,
    joc,
    teclat
  },

  
};
</script>

<template>
  <main>
    <h1>Joc</h1>
    <h1 id="lletres"></h1>
    <div class="row main-container">
      <div class="col s6">
        <joc />
        <teclat/>
      </div>
      <div class="col s6">
        <lletres />
      </div>
    </div>
  </main>
</template>

<style>
.col-grid {
  border: 2px solid black;
  height: 150px;
  width: 150px;
}


</style>