<template>
  <div>
    <h2>1 Paraula</h2>
    <div class="row">
      <div id="1div0" class="col-grid col m2">
        <h1>{{ this.paraula1[0] }}</h1>
      </div>
      <div id="1div1" class="col-grid col m2">
        <h1>{{ this.paraula1[1] }}</h1>
      </div>
      <div id="1div2" class="col-grid col m2">
        <h1>{{ this.paraula1[2] }}</h1>
      </div>
      <div id="1div3" class="col-grid col m2">
        <h1>{{ this.paraula1[3] }}</h1>
      </div>
      <div id="1div4" class="col-grid col m2">
        <h1>{{ this.paraula1[4] }}</h1>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="comprovar()"
        >Comprovar</a
      >
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
    <!-- TECLAT COMPLET
    <div id="keyboard-cont">
      <div class="first-row">
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="Q"
        >
          Q
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="W"
        >
          W
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="E"
        >
          E
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="R"
        >
          R
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="T"
        >
          T
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="Y"
        >
          Y
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="U"
        >
          U
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="I"
        >
          I
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="O"
        >
          O
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="P"
        >
          P
        </button>
      </div>
      <div class="second-row">
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="A"
        >
          A
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="S"
        >
          S
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="D"
        >
          D
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="F"
        >
          F
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="G"
        >
          G
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="H"
        >
          H
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="J"
        >
          J
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="K"
        >
          K
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="L"
        >
          L
        </button>
      </div>
      <div class="third-row">
        <button
          class="waves-effect waves-light btn red"
          v-on:click="deleteLetter()"
        >
          Del
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="Z"
        >
          Z
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="X"
        >
          X
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="C"
        >
          C
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="V"
        >
          V
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="B"
        >
          B
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="N"
        >
          N
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="M"
        >
          M
        </button>
        <button class="waves-effect waves-light btn green">Enter</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      paraula1: ["", "", "", "", ""],
      estatParaula1: ["", "", "", "", ""],
      solucio: ["B", "A", "L", "O", "N"],
      letra: "",
      count: 0,
    };
  },
  mounted() {
    const text = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    fetch("src/components/json/palabras.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => console.log(jsondata));

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
      for (var i = 0; i < 5; i++) {
        console.log("Paraula", this.paraula1[i]);
        console.log("Solucio", this.solucio[i]);
        if (this.paraula1[i] === this.solucio[i]) {
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
</style>