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
      <div class="row center-align margin-celdas oculta" id="pista1">
        <div class="col m10" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p readonly id="textarea1" class="materialize-textarea">
            {{ this.definicion1 }}
          </p>
        </div>
      </div>
          <a class="waves-effect waves-light btn" v-on:click="comprovar()"
            >Comprovar Paraula 1</a
          ><br><br>
      <div id="tecladoCompleto1">
        <div class="row">
          <button
            v-on:click="apretar($event)"
            name="Q"
            class="waves-effect waves-light btn"
            id="lletre-0"
          >
            Q
          </button>
          <button
            v-on:click="apretar($event)"
            name="W"
            class="waves-effect waves-light btn"
            id="lletre-1"
          >
            W
          </button>
          <button
            v-on:click="apretar($event)"
            name="E"
            class="waves-effect waves-light btn"
            id="lletre-2"
          >
            E
          </button>

          <button
            v-on:click="apretar($event)"
            name="R"
            class="waves-effect waves-light btn"
            id="lletre-3"
          >
            R
          </button>
          <button
            v-on:click="apretar($event)"
            name="T"
            class="waves-effect waves-light btn"
            id="lletre-4"
          >
            T
          </button>
          <button
            v-on:click="apretar($event)"
            name="Y"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            Y
          </button>
          <button
            v-on:click="apretar($event)"
            name="U"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            U
          </button>
          <button
            v-on:click="apretar($event)"
            name="I"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            I
          </button>
          <button
            v-on:click="apretar($event)"
            name="O"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            O
          </button>
          <button
            v-on:click="apretar($event)"
            name="P"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            P
          </button>
          <button
            class="waves-effect waves-light btn red"
            v-on:click="deleteLetter()"
          >
            Del
          </button>
        </div>
        <div class="row">
          <button
            v-on:click="apretar($event)"
            name="A"
            class="waves-effect waves-light btn"
            id="lletre-0"
          >
            A
          </button>
          <button
            v-on:click="apretar($event)"
            name="S"
            class="waves-effect waves-light btn"
            id="lletre-1"
          >
            S
          </button>
          <button
            v-on:click="apretar($event)"
            name="D"
            class="waves-effect waves-light btn"
            id="lletre-2"
          >
            D
          </button>

          <button
            v-on:click="apretar($event)"
            name="F"
            class="waves-effect waves-light btn"
            id="lletre-3"
          >
            F
          </button>
          <button
            v-on:click="apretar($event)"
            name="G"
            class="waves-effect waves-light btn"
            id="lletre-4"
          >
            G
          </button>
          <button
            v-on:click="apretar($event)"
            name="H"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            H
          </button>
          <button
            v-on:click="apretar($event)"
            name="J"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            J
          </button>
          <button
            v-on:click="apretar($event)"
            name="K"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            K
          </button>
          <button
            v-on:click="apretar($event)"
            name="L"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            L
          </button>
          <button
            v-on:click="apretar($event)"
            name="Ñ"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            Ñ
          </button>
        </div>
        <div class="row">
          <button
            v-on:click="apretar($event)"
            name="Z"
            class="waves-effect waves-light btn"
            id="lletre-0"
          >
            Z
          </button>
          <button
            v-on:click="apretar($event)"
            name="X"
            class="waves-effect waves-light btn"
            id="lletre-1"
          >
            X
          </button>
          <button
            v-on:click="apretar($event)"
            name="C"
            class="waves-effect waves-light btn"
            id="lletre-2"
          >
            C
          </button>

          <button
            v-on:click="apretar($event)"
            name="V"
            class="waves-effect waves-light btn"
            id="lletre-3"
          >
            V
          </button>
          <button
            v-on:click="apretar($event)"
            name="B"
            class="waves-effect waves-light btn"
            id="lletre-4"
          >
            B
          </button>
          <button
            v-on:click="apretar($event)"
            name="N"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            N
          </button>
          <button
            v-on:click="apretar($event)"
            name="M"
            class="waves-effect waves-light btn"
            id="lletre-5"
          >
            M
          </button>
        </div>
      </div>

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
      <div class="row center-align margin-celdas oculta" id="pista2">
        <div class="col m10" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p readonly id="textarea1" class="materialize-textarea">
            {{ this.definicion2 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar2()"
        >Comprovar Paraula 2</a
      ><br><br>
      <div id="tecladoCompleto2"></div>
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
      <div class="row center-align margin-celdas oculta" id="pista3">
        <div class="col m10" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p readonly id="textarea1" class="materialize-textarea">
            {{ this.definicion3 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar3()"
        >Comprovar Paraula 3</a
      ><br><br>
            <div id="tecladoCompleto3"></div>

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
      <div class="row center-align margin-celdas oculta" id="pista4">
        <div class="col m10" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p readonly id="textarea1" class="materialize-textarea">
            {{ this.definicion4 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar4()"
        >Comprovar Paraula 4</a
      ><br><br>
            <div id="tecladoCompleto4"></div>

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
      <div class="row center-align margin-celdas oculta" id="pista5">
        <div class="col m10" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p readonly id="textarea1" class="materialize-textarea">
            {{ this.definicion5 }}
          </p>
        </div>
      </div>
      <a id="modal-verificacion" class="waves-effect waves-light btn" href="#modal2" v-on:click="comprovar5()"
        >Comprovar Paraula 5</a
      ><br><br>
      <!-- Modal partida finalizada -->
  <div id="modal2" class="modal">
    <div class="modal-content">
      <h4>Puntuació</h4>
      <p>Tiempo: 00:00</p>
      <p>xxxxxxxxx</p>
      <p>xxxxxxxxx</p>
      <p>xxxxxxxxx</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
     
            <div id="tecladoCompleto5"></div>

      <p id="Felizitarpartida"></p>
      <div id="botonfinalizar" style="display: none">
        <RouterLink :to="'/puntuacions'" class="waves-effect waves-light btn"
          >Finalitza Partida</RouterLink
        >
      </div>

      <br />

      <!-- TECLAT 6 LLETRES -->
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
      vectorNumbers: [],

      //PARAULA 1
      paraula1: ["", "", "", "", ""],
      estatParaula1: ["", "", "", "", ""],
      solucio1: ["", "", "", "", ""],
      solucio1Count: 0,
      intents1: 0,
      definicion1: "",

      //PARAULA 2
      paraula2: ["", "", "", "", ""],
      estatParaula2: ["", "", "", "", ""],
      solucio2: ["B", "B", "B", "B", "B"],
      solucio2Count: 0,
      intents2: 0,
      definicion2: "",

      //PARAULA 3
      paraula3: ["", "", "", "", ""],
      estatParaula3: ["", "", "", "", ""],
      solucio3: ["B", "B", "B", "B", "B"],
      solucio3Count: 0,
      intents3: 0,
      definicion3: "",

      //PARAULA 4
      paraula4: ["", "", "", "", ""],
      estatParaula4: ["", "", "", "", ""],
      solucio4: ["B", "B", "B", "B", "B"],
      solucio4Count: 0,
      intents4: 0,
      definicion4: "",

      //PARAULA 5
      paraula5: ["", "", "", "", ""],
      estatParaula5: ["", "", "", "", ""],
      solucio5: ["B", "B", "B", "B", "B"],
      solucio5Count: 0,
      intents5: 0,
      definicion5: "",
    };
  },
  mounted() {
    fetch("http://paraudl.back.alumnes.inspedralbes.cat:7099/api/todos")
      .then((response) => response.json())
      .then((data) => (this.paraulaJson = data));
  },
  methods: {
    timer() {
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
    },

    generarRandNumero() {
      for (var i = 0; i < this.paraulaJson.length; i++) {
        this.vectorNumbers.push(i);
        console.log("Vector", i, " ", this.vectorNumbers);
        console.log("JSON", i, " ", this.paraulaJson.length);
      }

      for (var j = 0; j < 6; j++) {
        let position = Math.floor(Math.random() * this.vectorNumbers.length);
        this.randomNumber[j] = this.vectorNumbers[position];
        this.vectorNumbers.splice(position, 1);
        console.log("Vector", j, " ", this.vectorNumbers);
        console.log("Number", j, " ", this.randomNumber);
      }
    },
    iniciarPartida() {
      window.setInterval(() => {
        this.timer();
      }, 1000);
      document.getElementById("cronoTimer").classList.remove("oculta");
      this.generarRandNumero();
      console.log("LENGHT", this.paraulaJson.length);

      document.getElementById("buttonpartida").style.display = "none";
      document.getElementById("mostrarjuego").style.display = "block";
      document.getElementById("normasjuego").style.display = "none";
      //PARAULA 1
      console.log(this.paraulaJson[this.randomNumber[0]].palabra);
      this.solucio1 = this.paraulaJson[this.randomNumber[0]].palabra.split("");
      this.definicion1 = this.paraulaJson[this.randomNumber[0]].definicion;
      console.log(this.solucio1);
      //PARAULA 2
      console.log(this.paraulaJson[this.randomNumber[1]].palabra);
      this.solucio2 = this.paraulaJson[this.randomNumber[1]].palabra.split("");
      this.definicion2 = this.paraulaJson[this.randomNumber[1]].definicion;

      console.log(this.solucio2);
      //PARAULA 3
      console.log(this.paraulaJson[this.randomNumber[2]].palabra);
      this.solucio3 = this.paraulaJson[this.randomNumber[2]].palabra.split("");
      this.definicion3 = this.paraulaJson[this.randomNumber[2]].definicion;

      console.log(this.solucio3);
      //PARAULA 4
      console.log(this.paraulaJson[this.randomNumber[3]].palabra);
      this.solucio4 = this.paraulaJson[this.randomNumber[3]].palabra.split("");
      this.definicion4 = this.paraulaJson[this.randomNumber[3]].definicion;

      console.log(this.solucio4);
      //PARAULA 5
      console.log(this.paraulaJson[this.randomNumber[4]].palabra);
      this.solucio5 = this.paraulaJson[this.randomNumber[4]].palabra.split("");
      this.definicion5 = this.paraulaJson[this.randomNumber[4]].definicion;

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
        //Esta bien 
        if (this.solucio1Count >= 5) {
          this.count = 0;
          this.partida++;
          document
            .getElementById("tecladoCompleto2")
            .appendChild(document.getElementById("tecladoCompleto1"));
        } else {
          this.solucio1Count = 0;
        }
        this.intents1++;
        if (this.intents1 >= 10) {
          document.getElementById("pista1").classList.remove("oculta");
        }
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
          document
            .getElementById("tecladoCompleto3")
            .appendChild(document.getElementById("tecladoCompleto1"));
        } else {
          this.solucio2Count = 0;
        }
        this.intents2++;
        if (this.intents2 >= 10) {
          document.getElementById("pista2").classList.remove("oculta");
        }
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
          document
            .getElementById("tecladoCompleto4")
            .appendChild(document.getElementById("tecladoCompleto1"));
        } else {
          this.solucio3Count = 0;
        }
        this.intents3++;
        if (this.intents3 >= 10) {
          document.getElementById("pista3").classList.remove("oculta");
        }
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
          document
            .getElementById("tecladoCompleto5")
            .appendChild(document.getElementById("tecladoCompleto1"));
        } else {
          this.solucio4Count = 0;
        }
        this.intents4++;
        if (this.intents4 >= 10) {
          document.getElementById("pista4").classList.remove("oculta");
        }
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
        //ESTA BIEN
        if (this.solucio5Count >= 5) {
          this.count = 0;
          this.partida++;
          var elemento = document.getElementById("modal-verificacion");
          elemento.className += " waves-effect waves-light btn modal-trigger";
          document.getElementById("botonfinalizar").style.display = "block";
        } else {
          this.solucio5Count = 0;
        }
        this.intents5++;
        if (this.intents5 >= 10) {
          document.getElementById("pista5").classList.remove("oculta");
        }
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