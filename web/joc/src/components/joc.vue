<template>
  <div>
    <!-- <h4>1 Paraula</h4> -->

    <!-- <h4>1 Paraula {{ this.palabrasjson.palabra }}</h4> -->
    <button
      id="buttonpartida"
      class="waves-effect waves-light btn-large"
      v-on:click="iniciarPartida()"
    >
      Començar Partida
    </button>
    <div id="normasjuego">
      <h3>Normativa del joc</h3>
      <h4 style="padding: 50px">
        <b>OBJECTIU DEL JOC</b><br /><br />
        El obectiu del joc es conseguir les 5 paraules que necesitem en el menys
        temps posible.<br /><br />
        Contra mes rapid conseguiexis les 5 paraules , mes punts y mes alt en el
        ranking estaras.<br /><br />
        <b>NORMATIVA DEL JOC</b><br /><br />
        Nomes es podra escriure les paraules amb les lletres que nosaltres donem
        , si introdueixes alguna lletra que no esta en la part dreta de la
        pantalla automaticament estara malament
      </h4>
    </div>
    <div class="oculta" id="cronoTimer">
      <h1 class="waves-effect waves-light btn-large blue">
        TIEMPO: {{ timerMinuto }}:{{ timerZero }}{{ timerCount }}
      </h1>
    </div>
    <div id="mostrarjuego" style="display: none" onload="countUpTimer()">
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
        <div class="col m2">
          <a class="btn-floating btn-large waves-effect waves-light red">{{
            this.intents1
          }}</a>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar()"
        >Comprovar Paraula 1</a
      >
      <!-- <h2>Intents</h2>
    <a class="btn-floating btn-large waves-effect waves-light red">{{
      this.intents1
    }}</a> -->
      <!-- <h4>2 Paraula</h4> -->
      <div class="row center-align margin-celdas">
        <div id="2div0" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula2[0] }}</h3>
        </div>
        <div id="2div1" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula2[1] }}</h3>
        </div>
        <div id="2div2" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula2[2] }}</h3>
        </div>
        <div id="2div3" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula2[3] }}</h3>
        </div>
        <div id="2div4" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula2[4] }}</h3>
        </div>
        <div class="col m2">
          <a class="btn-floating btn-large waves-effect waves-light red">{{
            this.intents2
          }}</a>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar2()"
        >Comprovar Paraula 2</a
      >
      <!-- <h4>3 Paraula</h4> -->
      <div class="row center-align margin-celdas">
        <div id="3div0" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula3[0] }}</h3>
        </div>
        <div id="3div1" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula3[1] }}</h3>
        </div>
        <div id="3div2" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula3[2] }}</h3>
        </div>
        <div id="3div3" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula3[3] }}</h3>
        </div>
        <div id="3div4" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula3[4] }}</h3>
        </div>
        <div class="col m2">
          <a class="btn-floating btn-large waves-effect waves-light red">{{
            this.intents3
          }}</a>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar3()"
        >Comprovar Paraula 3</a
      >
      <!-- <h4>4 Paraula</h4> -->
      <div class="row center-align margin-celdas">
        <div id="4div0" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula4[0] }}</h3>
        </div>
        <div id="4div1" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula4[1] }}</h3>
        </div>
        <div id="4div2" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula4[2] }}</h3>
        </div>
        <div id="4div3" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula4[3] }}</h3>
        </div>
        <div id="4div4" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula4[4] }}</h3>
        </div>
        <div class="col m2">
          <a class="btn-floating btn-large waves-effect waves-light red">{{
            this.intents4
          }}</a>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar4()"
        >Comprovar Paraula 4</a
      >
      <!-- <h4>5 Paraula</h4> -->
      <div class="row center-align margin-celdas">
        <div id="5div0" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula5[0] }}</h3>
        </div>
        <div id="5div1" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula5[1] }}</h3>
        </div>
        <div id="5div2" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula5[2] }}</h3>
        </div>
        <div id="5div3" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula5[3] }}</h3>
        </div>
        <div id="5div4" class="col-grid col m2 z-depth-4">
          <h3>{{ this.paraula5[4] }}</h3>
        </div>
        <div class="col m2">
          <a class="btn-floating btn-large waves-effect waves-light red">{{
            this.intents5
          }}</a>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar5()"
        >Comprovar Paraula 5</a
      >
      <p id="Felizitarpartida"></p>
      <div id="botonfinalizar" style="display: none">
        <RouterLink :to="'/puntuacions'" class="waves-effect waves-light btn"
          >Finalitza Partida</RouterLink
        >
      </div>

      <br />

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      //GENERAL
      estatSolucio: ["0", "0", "0", "0", "0"],
      letra: "",
      count: 0,
      paraulaJson: [],
      randomNumber: [],
      partida: 1,
      timerCount: 0,
      timerMinuto: 0,
      timerZero: 0,

      //PARAULA 1
      paraula1: ["", "", "", "", ""],
      estatParaula1: ["", "", "", "", ""],
      solucio1: ["", "", "", "", ""],
      solucio1Count: 0,
      intents1: 0,

      //PARAULA 2
      paraula2: ["", "", "", "", ""],
      estatParaula2: ["", "", "", "", ""],
      solucio2: ["B", "B", "B", "B", "B"],
      solucio2Count: 0,
      intents2: 0,

      //PARAULA 3
      paraula3: ["", "", "", "", ""],
      estatParaula3: ["", "", "", "", ""],
      solucio3: ["B", "B", "B", "B", "B"],
      solucio3Count: 0,
      intents3: 0,

      //PARAULA 4
      paraula4: ["", "", "", "", ""],
      estatParaula4: ["", "", "", "", ""],
      solucio4: ["B", "B", "B", "B", "B"],
      solucio4Count: 0,
      intents4: 0,

      //PARAULA 5
      paraula5: ["", "", "", "", ""],
      estatParaula5: ["", "", "", "", ""],
      solucio5: ["B", "B", "B", "B", "B"],
      solucio5Count: 0,
      intents5: 0,
    };
  },

  watch: {
    timerCount: {
      handler() {
        setTimeout(() => {
          if (this.timerCount != 60) {
            this.timerCount++;
          }
          if (this.timerCount == 60) {
            this.timerMinuto++;
            this.timerCount = 0;
          }
          if (this.timerCount >= 10) {
            this.timerZero = "";
          } else {
            this.timerZero = 0;
          }
        }, 1000);
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  mounted() {
    const text = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    fetch("http://localhost:3001/api/todos")
      .then((response) => response.json())
      .then((data) => (this.paraulaJson = data));
    for (var j = 0; j < 6; j++) {
      this.randomNumber[j] = Math.floor(Math.random() * 7);
      console.log("Number", j, " ", this.randomNumber);
    }
    for (var i = 0; i < 6; i++) {
      text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
      possible = possible.replace(text[i], "");
      document.getElementById("lletre-" + i).innerHTML = text[i];
      document.getElementById("lletre-" + i).setAttribute("name", text[i]);
      console.log(i);
      console.log("Lletre: ", text[i]);
      console.log("Posible: ", possible);
    }
  },
  methods: {
    iniciarPartida() {
      document.getElementById("cronoTimer").classList.remove("oculta");

      console.log("LENGHT", this.paraulaJson.length);

      document.getElementById("buttonpartida").style.display = "none";
      document.getElementById("mostrarjuego").style.display = "block";
      document.getElementById("normasjuego").style.display = "none";
      //PARAULA 1
      console.log(this.paraulaJson[this.randomNumber[0]].palabra);
      this.solucio1 = this.paraulaJson[this.randomNumber[0]].palabra.split("");
      console.log(this.solucio1);
      //PARAULA 2
      console.log(this.paraulaJson[this.randomNumber[1]].palabra);
      this.solucio2 = this.paraulaJson[this.randomNumber[1]].palabra.split("");
      console.log(this.solucio2);
      //PARAULA 3
      console.log(this.paraulaJson[this.randomNumber[2]].palabra);
      this.solucio3 = this.paraulaJson[this.randomNumber[2]].palabra.split("");
      console.log(this.solucio3);
      //PARAULA 4
      console.log(this.paraulaJson[this.randomNumber[3]].palabra);
      this.solucio4 = this.paraulaJson[this.randomNumber[3]].palabra.split("");
      console.log(this.solucio4);
      //PARAULA 5
      console.log(this.paraulaJson[this.randomNumber[4]].palabra);
      this.solucio5 = this.paraulaJson[this.randomNumber[4]].palabra.split("");
      console.log(this.solucio5);
    },
    apretar(e) {
      this.letra = e.target.name;
      console.log(e.target.name);
      this.solucio1Count = 0;
      console.log("Partida: ", this.partida);
      //PARAULA 1
      if (this.partida == 1) {
        if (this.count < 5) {
          this.paraula1[this.count] = this.letra;
          this.count++;
          console.log("Posicion", this.count);
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 2
      if (this.partida == 2) {
        if (this.count < 5) {
          this.paraula2[this.count] = this.letra;
          this.count++;
          console.log("Posicion", this.count);
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 3
      if (this.partida == 3) {
        if (this.count < 5) {
          this.paraula3[this.count] = this.letra;
          this.count++;
          console.log("Posicion", this.count);
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 4
      if (this.partida == 4) {
        if (this.count < 5) {
          this.paraula4[this.count] = this.letra;
          this.count++;
          console.log("Posicion", this.count);
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 5
      if (this.partida == 5) {
        if (this.count < 5) {
          this.paraula5[this.count] = this.letra;
          this.count++;
          console.log("Posicion", this.count);
        }
        if (this.count < 5) {
        }
      }
    },
    deleteLetter() {
      //PARAULA 1
      if (this.partida == 1) {
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
      }
      //PARAULA 2
      if (this.partida == 2) {
        if (this.count == 0) {
          this.paraula2[this.count] = "";
        }
        if (this.paraula2[this.count] === "" && this.count > 0) {
          this.count = this.count - 1;
          this.paraula2[this.count] = "";
        } else if (!(this.paraula2[this.count] === "") && this.count > 0) {
          this.paraula2[this.count] = "";

          this.count = this.count - 1;
        }
        console.log("Posicion", this.count);
      }
      //PARAULA 3
      if (this.partida == 3) {
        if (this.count == 0) {
          this.paraula3[this.count] = "";
        }
        if (this.paraula3[this.count] === "" && this.count > 0) {
          this.count = this.count - 1;
          this.paraula3[this.count] = "";
        } else if (!(this.paraula3[this.count] === "") && this.count > 0) {
          this.paraula3[this.count] = "";

          this.count = this.count - 1;
        }
        console.log("Posicion", this.count);
      }
      //PARAULA 4
      if (this.partida == 4) {
        if (this.count == 0) {
          this.paraula4[this.count] = "";
        }
        if (this.paraula4[this.count] === "" && this.count > 0) {
          this.count = this.count - 1;
          this.paraula4[this.count] = "";
        } else if (!(this.paraula4[this.count] === "") && this.count > 0) {
          this.paraula4[this.count] = "";

          this.count = this.count - 1;
        }
        console.log("Posicion", this.count);
      }
      //PARAULA 5
      if (this.partida == 5) {
        if (this.count == 0) {
          this.paraula5[this.count] = "";
        }
        if (this.paraula5[this.count] === "" && this.count > 0) {
          this.count = this.count - 1;
          this.paraula5[this.count] = "";
        } else if (!(this.paraula5[this.count] === "") && this.count > 0) {
          this.paraula5[this.count] = "";

          this.count = this.count - 1;
        }
        console.log("Posicion", this.count);
      }
    },

    comprovar() {
      console.log(this.paraulaJson[this.randomNumber]);
      console.log("number random ", this.randomNumber);
      //PARAULA 1
      if (this.partida == 1) {
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
          if (this.estatParaula1[i] == this.estatSolucio[i]) {
            this.solucio1Count++;
          }
          console.log("estatParaula1: ", this.estatParaula1[i]);
          console.log("estatSolucio: ", this.estatSolucio[i]);
          console.log("Counter correctes: ", this.solucio1Count);
        }
        if (this.solucio1Count >= 5) {
          this.count = 0;
          this.partida++;
        }
        this.intents1++;
      }
    },
    comprovar2() {
      //PARAULA 2
      if (this.partida == 2) {
        for (var i = 0; i < 5; i++) {
          console.log("Paraula", this.paraula2[i]);
          console.log("Solucio", this.solucio2[i]);
          if (this.paraula2[i] === this.solucio2[i]) {
            this.estatParaula2[i] = 0;
            document.getElementById("2div" + i).classList.remove("incorrecte");

            document.getElementById("2div" + i).classList.add("correcte");
          } else {
            this.estatParaula2[i] = 1;
            document.getElementById("2div" + i).classList.remove("correcte");
            document.getElementById("2div" + i).classList.add("incorrecte");
          }
          console.log(this.estatParaula2[i]);
          if (this.estatParaula2[i] == this.estatSolucio[i]) {
            this.solucio2Count++;
          }
          console.log("estatParaula1: ", this.estatParaula2[i]);
          console.log("estatSolucio: ", this.estatSolucio[i]);
          console.log("Counter correctes: ", this.solucio2Count);
        }
        if (this.solucio2Count >= 5) {
          this.count = 0;
          this.partida++;
        }
        this.intents2++;
      }
    },
    comprovar3() {
      //PARAULA 3
      if (this.partida == 3) {
        for (var i = 0; i < 5; i++) {
          console.log("Paraula", this.paraula3[i]);
          console.log("Solucio", this.solucio3[i]);
          if (this.paraula3[i] === this.solucio3[i]) {
            this.estatParaula3[i] = 0;
            document.getElementById("3div" + i).classList.remove("incorrecte");

            document.getElementById("3div" + i).classList.add("correcte");
          } else {
            this.estatParaula3[i] = 1;
            document.getElementById("3div" + i).classList.remove("correcte");
            document.getElementById("3div" + i).classList.add("incorrecte");
          }
          console.log(this.estatParaula3[i]);
          if (this.estatParaula3[i] == this.estatSolucio[i]) {
            this.solucio3Count++;
          }
          console.log("estatParaula1: ", this.estatParaula3[i]);
          console.log("estatSolucio: ", this.estatSolucio[i]);
          console.log("Counter correctes: ", this.solucio3Count);
        }
        if (this.solucio3Count >= 5) {
          this.count = 0;
          this.partida++;
        }
        this.intents3++;
      }
    },
    comprovar4() {
      //PARAULA 4
      if (this.partida == 4) {
        for (var i = 0; i < 5; i++) {
          console.log("Paraula", this.paraula4[i]);
          console.log("Solucio", this.solucio4[i]);
          if (this.paraula4[i] === this.solucio4[i]) {
            this.estatParaula4[i] = 0;
            document.getElementById("4div" + i).classList.remove("incorrecte");

            document.getElementById("4div" + i).classList.add("correcte");
          } else {
            this.estatParaula4[i] = 1;
            document.getElementById("4div" + i).classList.remove("correcte");
            document.getElementById("4div" + i).classList.add("incorrecte");
          }
          console.log(this.estatParaula4[i]);
          if (this.estatParaula4[i] == this.estatSolucio[i]) {
            this.solucio4Count++;
          }
          console.log("estatParaula1: ", this.estatParaula4[i]);
          console.log("estatSolucio: ", this.estatSolucio[i]);
          console.log("Counter correctes: ", this.solucio4Count);
        }
        if (this.solucio4Count >= 5) {
          this.count = 0;
          this.partida++;
        }
        this.intents4++;
      }
    },
    comprovar5() {
      //PARAULA 5
      if (this.partida == 5) {
        for (var i = 0; i < 5; i++) {
          console.log("Paraula", this.paraula5[i]);
          console.log("Solucio", this.solucio5[i]);
          if (this.paraula5[i] === this.solucio5[i]) {
            this.estatParaula5[i] = 0;
            document.getElementById("5div" + i).classList.remove("incorrecte");

            document.getElementById("5div" + i).classList.add("correcte");
          } else {
            this.estatParaula5[i] = 1;
            document.getElementById("5div" + i).classList.remove("correcte");
            document.getElementById("5div" + i).classList.add("incorrecte");
          }
          console.log(this.estatParaula5[i]);
          if (this.estatParaula5[i] == this.estatSolucio[i]) {
            this.solucio5Count++;
          }
          console.log("estatParaula1: ", this.estatParaula5[i]);
          console.log("estatSolucio: ", this.estatSolucio[i]);
          console.log("Counter correctes: ", this.solucio5Count);
        }
        if (this.solucio5Count >= 5) {
          this.count = 0;
          this.partida++;
          document.getElementById("Felizitarpartida").innerHTML =
            "Felicidades!!";
          document.getElementById("botonfinalizar").style.display = "block";
        }
        this.intents5++;
      }
    },
  },
};
</script>

<style>
.correcte {
  background-color: #02ff19;
}

.oculta {
  display: none;
}

.incorrecte {
  background-color: #ff2a2a;
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