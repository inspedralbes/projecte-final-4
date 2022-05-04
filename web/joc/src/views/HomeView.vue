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
    <h1>Joc</h1>
    <h1 id="lletres"></h1>
    <div class="row main-container">
      <div class="col s6">
        <joc />
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