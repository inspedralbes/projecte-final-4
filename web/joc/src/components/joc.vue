<template>
  <div>
      <h2>1 Paraula</h2>
     <div class="row">
      <div class="col-grid col m2">{{this.paraula1[0]}}</div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <h2>2 Paraula</h2>
     <div class="row">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <h2>3 Paraula</h2>
     <div class="row">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <h2>4 Paraula</h2>
     <div class="row">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <h2>5 Paraula</h2>
     <div class="row">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
  <button @click="apretar">S</button>
  <button @click="comprova">COMPROVAR</button>
  </div>

</template>

<script>

export default {
  data() {
    return {
      paraula1: ["-","-","-","-","-"],
      solucio: ["C","A","M","I","O"]
    }   
  },
   methods: {
      apretar() {
        this.paraula1[0]="S";
      }
    },
}
</script>

<style>

</style>