<template>
  <div>
    <!-- Botó que crida la funció per començar la partida -->
    <button
      id="buttonpartida"
      class="waves-effect waves-light btn-large"
      v-on:click="iniciarPartida()"
    >
      Empezar Partida
    </button>

    <div id="normasjuego">
      <h3>Normativa del juego</h3>
      <h4 style="padding: 50px">
        <b>OBJETIVO DEL JUEGO</b><br /><br />
        El objetivo del juego es conseguir las 5 palabras que necesitamos en el
        menos tiempo posible. Contra más rápido consigue las 5 palabras , más
        puntos y más alto en el ranking estarás.<br /><br />
        Contra más rápido y menos intenso conseguirás las 5 palabras, más puntos
        y más alto en el ranking estarás.
        <br /><br />
        <b>NORMATIVA DEL JUEGO</b><br /><br />
        Solo se pueden escribir las palabras con las letras que nosotros damos ,
        si introduces alguna letra que no está en la parte derecha de la
        pantalla automáticamente estará mal
      </h4>
    </div>

    <!-- Cronòmetre amb el temps que portes de partida -->
    <div class="oculta" id="cronoTimer">
      <h1 class="waves-effect waves-light btn-large blue">
        TIEMPO: {{ timerMinuto }}:{{ timerZero }}{{ timerCount }}
      </h1>
    </div>

    <div id="mostrarjuego" style="display: none" onload="countUpTimer()">
      <!-- Primera paraula -->
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
        <div class="pista-responsive" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p
            readonly
            id="textarea1"
            class="materialize-textarea"
            style="padding: 5px"
          >
            {{ this.definicion1 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar()"
        >Comprobar palabra 1</a
      ><br /><br />
      <!-- Teclat -->
      <div id="tecladoCompleto1">
        <div class="row">
          <button
            v-on:click="apretar($event)"
            name="Q"
            class="waves-effect waves-light btn-large"
            id="lletre-0"
          >
            Q
          </button>
          <button
            v-on:click="apretar($event)"
            name="W"
            class="waves-effect waves-light btn-large"
            id="lletre-1"
          >
            W
          </button>
          <button
            v-on:click="apretar($event)"
            name="E"
            class="waves-effect waves-light btn-large"
            id="lletre-2"
          >
            E
          </button>

          <button
            v-on:click="apretar($event)"
            name="R"
            class="waves-effect waves-light btn-large"
            id="lletre-3"
          >
            R
          </button>
          <button
            v-on:click="apretar($event)"
            name="T"
            class="waves-effect waves-light btn-large"
            id="lletre-4"
          >
            T
          </button>
          <button
            v-on:click="apretar($event)"
            name="Y"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            Y
          </button>
          <button
            v-on:click="apretar($event)"
            name="U"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            U
          </button>
          <button
            v-on:click="apretar($event)"
            name="I"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            I
          </button>
          <button
            v-on:click="apretar($event)"
            name="O"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            O
          </button>
          <button
            v-on:click="apretar($event)"
            name="P"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            P
          </button>
        </div>
        <div class="row">
          <button
            v-on:click="apretar($event)"
            name="A"
            class="waves-effect waves-light btn-large"
            id="lletre-0"
          >
            A
          </button>
          <button
            v-on:click="apretar($event)"
            name="S"
            class="waves-effect waves-light btn-large"
            id="lletre-1"
          >
            S
          </button>
          <button
            v-on:click="apretar($event)"
            name="D"
            class="waves-effect waves-light btn-large"
            id="lletre-2"
          >
            D
          </button>

          <button
            v-on:click="apretar($event)"
            name="F"
            class="waves-effect waves-light btn-large"
            id="lletre-3"
          >
            F
          </button>
          <button
            v-on:click="apretar($event)"
            name="G"
            class="waves-effect waves-light btn-large"
            id="lletre-4"
          >
            G
          </button>
          <button
            v-on:click="apretar($event)"
            name="H"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            H
          </button>
          <button
            v-on:click="apretar($event)"
            name="J"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            J
          </button>
          <button
            v-on:click="apretar($event)"
            name="K"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            K
          </button>
          <button
            v-on:click="apretar($event)"
            name="L"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            L
          </button>
          <button
            v-on:click="apretar($event)"
            name="Ñ"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            Ñ
          </button>
        </div>
        <div class="row">
          <button
            v-on:click="apretar($event)"
            name="Z"
            class="waves-effect waves-light btn-large"
            id="lletre-0"
          >
            Z
          </button>
          <button
            v-on:click="apretar($event)"
            name="X"
            class="waves-effect waves-light btn-large"
            id="lletre-1"
          >
            X
          </button>
          <button
            v-on:click="apretar($event)"
            name="C"
            class="waves-effect waves-light btn-large"
            id="lletre-2"
          >
            C
          </button>

          <button
            v-on:click="apretar($event)"
            name="V"
            class="waves-effect waves-light btn-large"
            id="lletre-3"
          >
            V
          </button>
          <button
            v-on:click="apretar($event)"
            name="B"
            class="waves-effect waves-light btn-large"
            id="lletre-4"
          >
            B
          </button>
          <button
            v-on:click="apretar($event)"
            name="N"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            N
          </button>
          <button
            v-on:click="apretar($event)"
            name="M"
            class="waves-effect waves-light btn-large"
            id="lletre-5"
          >
            M
          </button>
          <button
            class="waves-effect waves-light btn-large red ocultar-del-movil"
            v-on:click="deleteLetter()"
          >
            Del
          </button>
        </div>
      </div>

      <!-- Segona paraula -->
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
        <div class="pista-responsive" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p
            readonly
            id="textarea1"
            class="materialize-textarea"
            style="padding: 5px"
          >
            {{ this.definicion2 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar2()"
        >Comprobar palabra 2</a
      ><br /><br />
      <div id="tecladoCompleto2"></div>

      <!-- Tercera paraula -->
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
        <div class="pista-responsive" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p
            readonly
            id="textarea1"
            class="materialize-textarea"
            style="padding: 5px"
          >
            {{ this.definicion3 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar3()"
        >Comprobar palabra 3</a
      ><br /><br />
      <div id="tecladoCompleto3"></div>

      <!-- Quarta paraula -->
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
        <div class="pista-responsive" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p
            readonly
            id="textarea1"
            class="materialize-textarea"
            style="padding: 5px"
          >
            {{ this.definicion4 }}
          </p>
        </div>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar4()"
        >Comprobar palabra 4</a
      ><br /><br />
      <div id="tecladoCompleto4"></div>

      <!-- Cinquena paraula -->
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
        <div class="pista-responsive" style="border: 2px solid black">
          <label for="textarea1">PISTA</label>
          <p
            readonly
            id="textarea1"
            class="materialize-textarea"
            style="padding: 5px"
          >
            {{ this.definicion5 }}
          </p>
        </div>
      </div>
      <a
        id="modal-verificacion"
        class="waves-effect waves-light btn"
        href="#modal2"
        v-on:click="comprovar5()"
        >Comprobar palabra 5</a
      ><br /><br />
      <!-- Modal partida finalitzada -->
      <div id="modal2" class="modal">
        <div class="modal-content">
          <h4>Puntuación</h4>
          <p>
            Tiempo: {{ this.timerFinalMinuto }}:{{ this.timerZero
            }}{{ this.timerFinal }}
          </p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Palabra</th>
                <th>Intentos</th>
                <th>Pista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{{ this.palabraCompleta1 }}</td>
                <td>{{ this.intents1 }}</td>
                <td>{{ this.UsaPista1 }}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{{ this.palabraCompleta2 }}</td>
                <td>{{ this.intents2 }}</td>
                <td>{{ this.UsaPista2 }}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{{ this.palabraCompleta3 }}</td>
                <td>{{ this.intents3 }}</td>
                <td>{{ this.UsaPista3 }}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{{ this.palabraCompleta4 }}</td>
                <td>{{ this.intents4 }}</td>
                <td>{{ this.UsaPista4 }}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>{{ this.palabraCompleta5 }}</td>
                <td>{{ this.intents5 }}</td>
                <td>{{ this.UsaPista5 }}</td>
              </tr>
            </tbody>
          </table>
          <br /><br />
          <iframe
            src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fparaudl.alumnes.inspedralbes.cat%2F&layout=button&size=large&width=103&height=28&appId"
            width="103"
            height="28"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div class="modal-footer">
          <div class="row center-align margin-celdas">
            <div class="col s3">
              <input id="userPunt" type="text" class="validate" />
              <label for="user">Usuario</label>
            </div>
            <div class="col s3">
              <button
                v-on:click="guardarPuntuacion()"
                class="modal-close waves-effect waves-green btn"
              >
                Guardar puntuación
              </button>
            </div>
            <div class="col s3">
              <button
                href="#!"
                class="modal-close waves-effect waves-green btn"
              >
                Cerrar
              </button>
            </div>
          </div>
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
    </div>
  </div>
</template>

<script>
import { AdminStore } from "../stores/store";
import { storeToRefs } from "pinia";
export default {
  setup(){
    const main = AdminStore();

    const { user } = storeToRefs(main);

    return {
      user,
    };
  },
  
  data() {
    return {
      //GENERAL
      timerFinal: "",
      timerFinalMinuto: "",
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
      numeroPistas: 0,

      //PARAULA 1
      palabraCompleta1: "",
      paraula1: ["", "", "", "", ""],
      estatParaula1: ["", "", "", "", ""],
      solucio1: ["", "", "", "", ""],
      solucio1Count: 0,
      intents1: 0,
      definicion1: "",
      UsaPista1: "NO",

      //PARAULA 2
      palabraCompleta2: "",
      paraula2: ["", "", "", "", ""],
      estatParaula2: ["", "", "", "", ""],
      solucio2: ["B", "B", "B", "B", "B"],
      solucio2Count: 0,
      intents2: 0,
      definicion2: "",
      UsaPista2: "NO",

      //PARAULA 3
      palabraCompleta3: "",

      paraula3: ["", "", "", "", ""],
      estatParaula3: ["", "", "", "", ""],
      solucio3: ["B", "B", "B", "B", "B"],
      solucio3Count: 0,
      intents3: 0,
      definicion3: "",
      UsaPista3: "NO",

      //PARAULA 4
      palabraCompleta4: "",

      paraula4: ["", "", "", "", ""],
      estatParaula4: ["", "", "", "", ""],
      solucio4: ["B", "B", "B", "B", "B"],
      solucio4Count: 0,
      intents4: 0,
      definicion4: "",
      UsaPista4: "NO",

      //PARAULA 5
      palabraCompleta5: "",
      paraula5: ["", "", "", "", ""],
      estatParaula5: ["", "", "", "", ""],
      solucio5: ["B", "B", "B", "B", "B"],
      solucio5Count: 0,
      intents5: 0,
      definicion5: "",
      UsaPista5: "NO",
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
      }

      for (var j = 0; j < 6; j++) {
        let position = Math.floor(Math.random() * this.vectorNumbers.length);
        this.randomNumber[j] = this.vectorNumbers[position];
        this.vectorNumbers.splice(position, 1);
      }
    },
    guardarPuntuacion() {
      var usuario = document.getElementById("userPunt").value;
      let tiempoTimer;
      if (this.timerFinal >= 10) {
        tiempoTimer = this.timerFinalMinuto + ":" + this.timerFinal;
      } else {
        tiempoTimer = this.timerFinalMinuto + ":" + "0" + this.timerFinal;
      }

      let data = {
        user: usuario,
        tiempo: tiempoTimer,
        pistas: this.numeroPistas,
        intentos1: this.intents1,
        intentos2: this.intents2,
        intentos3: this.intents3,
        intentos4: this.intents4,
        intentos5: this.intents5,
      };
      fetch(
        "http://paraudl.back.alumnes.inspedralbes.cat:7099/api/todos/puntuaciones",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
        });
    },
    iniciarPartida() {
      window.setInterval(() => {
        this.timer();
      }, 1000);
      document.getElementById("cronoTimer").classList.remove("oculta");
      this.generarRandNumero();

      document.getElementById("buttonpartida").style.display = "none";
      document.getElementById("mostrarjuego").style.display = "block";
      document.getElementById("normasjuego").style.display = "none";
      //PARAULA 1
      this.palabraCompleta1 = this.paraulaJson[this.randomNumber[0]].palabra;
      console.log(this.paraulaJson[this.randomNumber[0]].palabra);
      this.solucio1 = this.paraulaJson[this.randomNumber[0]].palabra.split("");
      this.definicion1 = this.paraulaJson[this.randomNumber[0]].definicion;
      console.log(this.solucio1);
      //PARAULA 2
      this.palabraCompleta2 = this.paraulaJson[this.randomNumber[1]].palabra;
      console.log(this.paraulaJson[this.randomNumber[1]].palabra);
      this.solucio2 = this.paraulaJson[this.randomNumber[1]].palabra.split("");
      this.definicion2 = this.paraulaJson[this.randomNumber[1]].definicion;

      console.log(this.solucio2);
      //PARAULA 3
      this.palabraCompleta3 = this.paraulaJson[this.randomNumber[2]].palabra;
      console.log(this.paraulaJson[this.randomNumber[2]].palabra);
      this.solucio3 = this.paraulaJson[this.randomNumber[2]].palabra.split("");
      this.definicion3 = this.paraulaJson[this.randomNumber[2]].definicion;

      console.log(this.solucio3);
      //PARAULA 4
      this.palabraCompleta4 = this.paraulaJson[this.randomNumber[3]].palabra;
      console.log(this.paraulaJson[this.randomNumber[3]].palabra);
      this.solucio4 = this.paraulaJson[this.randomNumber[3]].palabra.split("");
      this.definicion4 = this.paraulaJson[this.randomNumber[3]].definicion;

      console.log(this.solucio4);
      //PARAULA 5
      this.palabraCompleta5 = this.paraulaJson[this.randomNumber[4]].palabra;
      console.log(this.paraulaJson[this.randomNumber[4]].palabra);
      this.solucio5 = this.paraulaJson[this.randomNumber[4]].palabra.split("");
      this.definicion5 = this.paraulaJson[this.randomNumber[4]].definicion;

      console.log(this.solucio5);
    },
    apretar(e) {
      this.letra = e.target.name;
      this.solucio1Count = 0;
      //PARAULA 1
      if (this.partida == 1) {
        if (this.count < 5) {
          this.paraula1[this.count] = this.letra;
          this.count++;
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 2
      if (this.partida == 2) {
        if (this.count < 5) {
          this.paraula2[this.count] = this.letra;
          this.count++;
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 3
      if (this.partida == 3) {
        if (this.count < 5) {
          this.paraula3[this.count] = this.letra;
          this.count++;
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 4
      if (this.partida == 4) {
        if (this.count < 5) {
          this.paraula4[this.count] = this.letra;
          this.count++;
        }
        if (this.count < 5) {
        }
      }
      //PARAULA 5
      if (this.partida == 5) {
        if (this.count < 5) {
          this.paraula5[this.count] = this.letra;
          this.count++;
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
      }
    },

    comprovar() {
      //PARAULA 1
      if (this.partida == 1) {
        for (var i = 0; i < 5; i++) {
          if (this.paraula1[i] === this.solucio1[i]) {
            this.estatParaula1[i] = 0;
            document.getElementById("1div" + i).classList.remove("incorrecte");

            document.getElementById("1div" + i).classList.add("correcte");
          } else {
            this.estatParaula1[i] = 1;
            document.getElementById("1div" + i).classList.remove("correcte");
            document.getElementById("1div" + i).classList.add("incorrecte");
          }
          if (this.estatParaula1[i] == this.estatSolucio[i]) {
            this.solucio1Count++;
          }
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
        //PISTA 1
        if (this.intents1 >= 10) {
          document.getElementById("pista1").classList.remove("oculta");
          this.numeroPistas++;
          this.UsaPista1 = "SI";
        }
      }
    },
    comprovar2() {
      //PARAULA 2
      if (this.partida == 2) {
        for (var i = 0; i < 5; i++) {
          if (this.paraula2[i] === this.solucio2[i]) {
            this.estatParaula2[i] = 0;
            document.getElementById("2div" + i).classList.remove("incorrecte");

            document.getElementById("2div" + i).classList.add("correcte");
          } else {
            this.estatParaula2[i] = 1;
            document.getElementById("2div" + i).classList.remove("correcte");
            document.getElementById("2div" + i).classList.add("incorrecte");
          }
          if (this.estatParaula2[i] == this.estatSolucio[i]) {
            this.solucio2Count++;
          }
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
        //PISTA
        if (this.intents2 >= 10) {
          document.getElementById("pista2").classList.remove("oculta");
          this.numeroPistas++;
          this.UsaPista2 = "SI";
        }
      }
    },
    comprovar3() {
      //PARAULA 3
      if (this.partida == 3) {
        for (var i = 0; i < 5; i++) {
          if (this.paraula3[i] === this.solucio3[i]) {
            this.estatParaula3[i] = 0;
            document.getElementById("3div" + i).classList.remove("incorrecte");

            document.getElementById("3div" + i).classList.add("correcte");
          } else {
            this.estatParaula3[i] = 1;
            document.getElementById("3div" + i).classList.remove("correcte");
            document.getElementById("3div" + i).classList.add("incorrecte");
          }
          if (this.estatParaula3[i] == this.estatSolucio[i]) {
            this.solucio3Count++;
          }
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
        //PISTA
        if (this.intents3 >= 10) {
          document.getElementById("pista3").classList.remove("oculta");
          this.numeroPistas++;
          this.UsaPista3 = "SI";
        }
      }
    },
    comprovar4() {
      //PARAULA 4
      if (this.partida == 4) {
        for (var i = 0; i < 5; i++) {
          if (this.paraula4[i] === this.solucio4[i]) {
            this.estatParaula4[i] = 0;
            document.getElementById("4div" + i).classList.remove("incorrecte");

            document.getElementById("4div" + i).classList.add("correcte");
          } else {
            this.estatParaula4[i] = 1;
            document.getElementById("4div" + i).classList.remove("correcte");
            document.getElementById("4div" + i).classList.add("incorrecte");
          }
          if (this.estatParaula4[i] == this.estatSolucio[i]) {
            this.solucio4Count++;
          }
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
        //PISTA
        if (this.intents4 >= 10) {
          document.getElementById("pista4").classList.remove("oculta");
          this.numeroPistas++;
          this.UsaPista4 = "SI";
        }
      }
    },
    comprovar5() {
      //PARAULA 5
      if (this.partida == 5) {
        for (var i = 0; i < 5; i++) {
          if (this.paraula5[i] === this.solucio5[i]) {
            this.estatParaula5[i] = 0;
            document.getElementById("5div" + i).classList.remove("incorrecte");

            document.getElementById("5div" + i).classList.add("correcte");
          } else {
            this.estatParaula5[i] = 1;
            document.getElementById("5div" + i).classList.remove("correcte");
            document.getElementById("5div" + i).classList.add("incorrecte");
          }
          if (this.estatParaula5[i] == this.estatSolucio[i]) {
            this.solucio5Count++;
          }
        }
        //ESTA BIEN
        if (this.solucio5Count >= 5) {
          this.timerFinal = this.timerCount;
          this.timerFinalMinuto = this.timerMinuto;
          this.count = 0;
          this.partida++;
          var elemento = document.getElementById("modal-verificacion");
          elemento.className += " waves-effect waves-light btn modal-trigger";
          document.getElementById("botonfinalizar").style.display = "block";
        } else {
          this.solucio5Count = 0;
        }
        this.intents5++;
        //PISTA
        if (this.intents5 >= 10) {
          document.getElementById("pista5").classList.remove("oculta");
          this.numeroPistas++;
          this.UsaPista5 = "SI";
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

#userPunt {
  background-color: rgba(96, 233, 130, 0.589);
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

@media screen and (min-width: 800px) and (max-width: 2000px) {
  .pista-responsive {
    margin-right: 16%;
  }
}

@media screen and (min-width: 200px) and (max-width: 800px) {
  .pista-responsive {
    margin-right: 16%;
  }
}

@media screen and (min-width: 200px) and (max-width: 800px) {
  .btn-large {
    height: 34px !important;
    line-height: 34px !important;
    font-size: 13px !important;
    padding: 0 16px !important;
  }
}
</style>