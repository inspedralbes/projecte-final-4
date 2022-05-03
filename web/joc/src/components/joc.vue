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
  <div id="keyboard-cont">
        <div class="first-row">
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="q">q</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="w">w</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="e">e</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="r">r</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="t">t</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="y">y</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="u">u</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="i">i</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="o">o</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="p">p</button>
        </div>
        <div class="second-row">
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="a">a</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="s">s</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="d">d</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="f">f</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="g">g</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="h">h</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="j">j</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="k">k</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="l">l</button>
        </div>
        <div class="third-row">
            <button class="waves-effect waves-light btn">Del</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="z">z</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="x">x</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="c">c</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="v">v</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="b">b</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="n">n</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="m">m</button>
            <button class="waves-effect waves-light btn">Enter</button>
        </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      paraula1: ["-","-","-","-","-"],
      estatParaula1: [1,1,0,0,0],
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
#keyboard-cont {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#keyboard-cont div {
  display: flex;
}

.second-row {
  margin: 0.5rem 0;
}

.keyboard-button {
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  margin: 0 2px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>