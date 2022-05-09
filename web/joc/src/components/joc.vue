<template>
  <div>
    <h4>1 Paraula</h4>

    <!-- <h4>1 Paraula {{ this.palabrasjson.palabra }}</h4> -->

    <div class="row center-align margin-celdas">
      <div id="1div0" class="col-grid col m2 z-depth-4">
        <h3>{{ this.paraula1[0] }}</h3>
      </div>
      <div id="1div1" class="col-grid col m2 z-depth-4">
        <h3>{{ this.paraula1[1] }}</h3>
      </div>
      <div id="1div2" class="col-grid col m2 z-depth-4">
        <h3>{{ this.paraula1[2] }}</h3>
      </div>
      <div id="1div3" class="col-grid col m2 z-depth-4">
        <h3>{{ this.paraula1[3] }}</h3>
      </div>
      <div id="1div4" class="col-grid col m2 z-depth-4">
        <h3>{{ this.paraula1[4] }}</h3>
      </div>
    </div>
    <a class="waves-effect waves-light btn" v-on:click="comprovar()"
      >Comprovar Paraula 1</a
    >
    <h2>Intents</h2>
    <a class="btn-floating btn-large waves-effect waves-light red">{{
      this.intents1
    }}</a>
    <!-- <h4>2 Paraula</h4> -->
    <div class="row center-align margin-celdas">
      <div id="2div0" class="col-grid col m2"></div>
      <div id="2div1" class="col-grid col m2"></div>
      <div id="2div2" class="col-grid col m2"></div>
      <div id="2div3" class="col-grid col m2"></div>
      <div id="2div4" class="col-grid col m2"></div>
    </div>
    <a class="waves-effect waves-light btn" v-on:click="comprovar2()"
      >Comprovar Paraula 2</a
    >
    <!-- <h4>3 Paraula</h4> -->
    <div class="row center-align margin-celdas">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <a class="waves-effect waves-light btn" v-on:click="comprovar()"
      >Comprovar Paraula 3</a
    >
    <!-- <h4>4 Paraula</h4> -->
    <div class="row center-align margin-celdas">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <a class="waves-effect waves-light btn" v-on:click="comprovar()"
      >Comprovar Paraula 4</a
    >
    <!-- <h4>5 Paraula</h4> -->
    <div class="row center-align margin-celdas">
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
      <div class="col-grid col m2"></div>
    </div>
    <a class="waves-effect waves-light btn" v-on:click="comprovar()"
      >Comprovar Paraula 5</a
    >
    <br /><br />

    <!-- TECLAT 6 LLETRES -->
    <div class="row">
      <button
        v-on:click="apretar($event)"
        name=""
        class="waves-effect waves-light btn"
        id="lletre-0"
      ></button>
      <button
        v-on:click="apretar($event)"
        name=""
        class="waves-effect waves-light btn"
        id="lletre-1"
      ></button>
      <button
        v-on:click="apretar($event)"
        name=""
        class="waves-effect waves-light btn"
        id="lletre-2"
      ></button>
    </div>
    <div class="row">
      <button
        v-on:click="apretar($event)"
        name=""
        class="waves-effect waves-light btn"
        id="lletre-3"
      ></button>
      <button
        v-on:click="apretar($event)"
        name=""
        class="waves-effect waves-light btn"
        id="lletre-4"
      ></button>
      <button
        v-on:click="apretar($event)"
        name=""
        class="waves-effect waves-light btn"
        id="lletre-5"
      ></button>
      <button
        class="waves-effect waves-light btn red"
        v-on:click="deleteLetter()"
      >
        Del
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paraula1: ["", "", "", "", ""],
      paraula2: ["", "", "", "", ""],
      estatParaula1: ["", "", "", "", ""],
      solucio1: ["B", "A", "L", "O", "N"],
      solucio2: ["C", "E", "S", "T", "A"],
      letra: "",
      count: 0,
      paraulaJson: [],
      randomNumber: "",
      intents1: 0,
    };
  },
  mounted() {
    const text = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    fetch("src/components/json/palabras.json")
      .then((response) => response.json())
      .then((data) => (this.paraulaJson = data.datos));
    this.randomNumber = Math.floor(Math.random() * 5);
    for (var i = 0; i < 6; i++) {
      text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
      document.getElementById("lletre-" + i).innerHTML = text[i];
      document.getElementById("lletre-" + i).setAttribute("name", text[i]);
      console.log(i);
      console.log(text);
    }
  },
  methods: {
    apretar(e) {
      this.letra = e.target.name;
      console.log(e.target.name);
      if (this.count < 5) {
        this.paraula1[this.count] = this.letra;
        this.count++;
        console.log("Posicion", this.count);
      }
      if (this.count < 5) {
      }
    },
    deleteLetter() {
      if (this.count == 0) {
        this.paraula1[this.count] = "";
      }
      if (this.paraula1[this.count] === "" && this.count > 0) {
        this.count = this.count - 1;
        this.paraula1[this.count] = "";
      } else if (!(this.paraula1[this.count] === "") && this.count > 0) {
        this.paraula1[this.count] = "";

        this.count = this.count - 1;
      }
      console.log("Posicion", this.count);
    },

    comprovar() {
      console.log(this.paraulaJson[this.randomNumber]);
      console.log("number random ", this.randomNumber);
      for (var i = 0; i < 5; i++) {
        console.log("Paraula", this.paraula1[i]);
        console.log("Solucio", this.solucio1[i]);
        if (this.paraula1[i] === this.solucio1[i]) {
          this.estatParaula1[i] = 0;
          document.getElementById("1div" + i).classList.remove("incorrecte");

          document.getElementById("1div" + i).classList.add("correcte");
        } else {
          this.estatParaula1[i] = 1;
          document.getElementById("1div" + i).classList.remove("correcte");
          document.getElementById("1div" + i).classList.add("incorrecte");
        }
        console.log(this.estatParaula1[i]);
      }
      this.intents1++;
    },
    comprovar2() {
      console.log(this.paraulaJson[this.randomNumber]);
      console.log("number random ", this.randomNumber);
      for (var i = 0; i < 5; i++) {
        console.log("Paraula", this.paraula1[i]);
        console.log("Solucio", this.solucio1[i]);
        if (this.paraula1[i] === this.solucio1[i]) {
          this.estatParaula1[i] = 0;
          document.getElementById("2div" + i).classList.remove("incorrecte");

          document.getElementById("2div" + i).classList.add("correcte");
        } else {
          this.estatParaula1[i] = 1;
          document.getElementById("2div" + i).classList.remove("correcte");
          document.getElementById("2div" + i).classList.add("incorrecte");
        }
        console.log(this.estatParaula1[i]);
      }
      this.intents1++;
    },
  },
};
</script>

<style>
.correcte {
  background-color: green;
}

.incorrecte {
  background-color: red;
}
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

.margin-celdas {
  padding-left: 14%;
}
</style>