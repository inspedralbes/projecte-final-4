<template>
  <div>
    <hr />
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
      <div class="col s6">
        <a
          class="waves-effect waves-light btn-large"
          v-on:click="añadirPalabra()"
          >Añadir Palabra</a
        >
      </div>
      <div class="col s6">
        <a class="waves-effect waves-light btn-large" v-on:click="mostrarPalabras()">Ver Palabras</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      palabraView: [],
    };
  },
  methods: {
    añadirPalabra() {
      const data = { palabra: paraula };

      var paraula = document.getElementById("afegirPalabra").value;

      console.log("paraula: ", paraula);

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
        .then((data) => (this.palabraView = data));
        console.log(this.palabraView)
    },
  },
};
</script>

<style>
</style>