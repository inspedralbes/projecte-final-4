<template>
  <div>
    <Header />
    <br />
    <div class="row center-align box">
      <div class="col s6">
        <a class="waves-effect waves-light btn-large" href="/">HOME</a>
        <br /><br />
        <a
          class="waves-effect waves-light btn-large"
          v-on:click="mostrarPalabras()"
          >Ver Palabras</a
        >
      </div>
      <div class="col s6 form">
        <input
          placeholder="PALABRA"
          id="afegirPalabra"
          type="text"
          class="validate"
        />
        <input
          placeholder="DEFINICIÓN"
          id="afegirDefinicion"
          type="text"
          class="validate"
        />
        <a
          class="waves-effect waves-light btn-large"
          v-on:click="añadirPalabra()"
          >Añadir Palabra</a
        >
      </div>
    </div>
    <br />
    <div class="row box">
      <table class="striped" id="todotable">
        <thead>
          <tr>
            <th>Palabra</th>
            <th>Definición</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pal in listaPalabras">
            <td>{{ pal.palabra }}</td>
            <td>{{ pal.definicion }}</td>
            <td>
              <button
                class="btn-floating btn-large waves-effect waves-light red"
                v-bind:id="pal._id"
                @click="deletePalabra(pal._id)"
              >
                <i class="material-icons">delete_forever</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      palabraView: [],
      listaPalabras: [],
    };
  },
  methods: {
    añadirPalabra() {
      var paraula = document.getElementById("afegirPalabra").value;
      var defi = document.getElementById("afegirDefinicion").value;
      paraula = paraula.toUpperCase();
      let data = {
        definicion: defi,
        palabra: paraula,
      };
      // const data = { palabra: paraula };

      fetch("http://paraudl.back.alumnes.inspedralbes.cat:7099/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
        });
    },
    mostrarPalabras() {
      fetch("http://paraudl.back.alumnes.inspedralbes.cat:7099/api/todos")
        .then((response) => response.json())
        .then((data) => {
          this.listaPalabras = data;
        });
    },
    deletePalabra(id) {
      fetch(
        "http://paraudl.back.alumnes.inspedralbes.cat:7099/api/todos/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.text())
        .then((res) => console.log(res));
      this.mostrarPalabras();
    },
  },
};
</script>

<style>
body{
overflow: scroll !important; 
overflow-x: hidden !important;

}
.box {
  padding: 10px;
}
.form {
  background-color: rgba(242, 242, 242, 0.5);
}
input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}
</style>