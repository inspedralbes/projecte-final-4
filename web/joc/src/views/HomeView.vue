<script>
import 'materialize-css'
import lletres from "../components/lletres.vue";

export default{
  components:{
        lletres,

    },
}
</script>

<template>
  <main>
    <h1>Joc</h1>
    <lletres/>
    <h2>1 Paraula</h2>
     <div class="row">
      <div class="col m2"><input/></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
    </div>
    <h2>2 Paraula</h2>
     <div class="row">
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
    </div>
    <h2>3 Paraula</h2>
     <div class="row">
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
    </div>
    <h2>4 Paraula</h2>
     <div class="row">
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
    </div>
    <h2>5 Paraula</h2>
     <div class="row">
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
      <div class="col m2"></div>
    </div>
  </main>
</template>

<style>
.col {
  height: 150px;
  width: 150px;
  line-height: 50px;
  border: 1px solid black;
  text-align: center;
}

</style>