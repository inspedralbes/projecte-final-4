<template>
  <div>
    <a class="waves-effect waves-light btn-large" href="/">HOME</a>
    <br />
    <div class="row">
      <div class="col s12">
        <input
          placeholder="Palabra"
          id="afegirPalabra"
          type="text"
          class="validate"
        />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <input
          placeholder="Definicion"
          id="afegirDefinicion"
          type="text"
          class="validate"
        />
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <a
          class="waves-effect waves-light btn-large"
          v-on:click="añadirPalabra()"
          >Añadir Palabra</a
        >
      </div>
      <div class="col s6">
        <a
          class="waves-effect waves-light btn-large"
          v-on:click="mostrarPalabras()"
          >Ver Palabras</a
        >
      </div>
      <table class="striped" id="todotable">
        <tr>
                <th>Palabra</th>
                <th>Definición</th>
                <th></th>
                </tr>
                <tr v-for="pal in listaPalabras">
                    <td>{{pal.palabra}}</td>
                    <td>{{pal.definicion}}</td>
                    <td><button class="btn-floating btn-large waves-effect waves-light red" v-bind:id="pal._id" @click="deletePalabra(pal._id)"><i class="material-icons">delete_forever</i></button></td>
              </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      palabraView: [],
      listaPalabras:[],
    };
  },
  methods: {
    añadirPalabra() {
      var paraula = document.getElementById("afegirPalabra").value;
      var defi = document.getElementById("afegirDefinicion").value;

      let data = {
        definicion: defi,
        palabra: paraula,
      };
      // const data = { palabra: paraula };

      console.log("paraula: ", paraula);
      console.log("paraula: ", defi);
      console.log("data: ", data);

      fetch("http://localhost:3001/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    mostrarPalabras() {
      fetch("http://localhost:3001/api/todos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.listaPalabras=data;
          console.log("lenght", data.length);})
        
    
    },
    deletePalabra(id) {
      console.log("id: ", id);
        fetch("http://localhost:3001/api/todos/" + id, {
          method: "DELETE",
           headers: {
          "Content-Type": "application/json",
        },
        })
          .then((res) => res.text())
          .then((res) => console.log(res));
          this.mostrarPalabras();
      },
    },
  }

</script>

<style>
</style>