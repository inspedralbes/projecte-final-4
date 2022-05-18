<template>
  <div>
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
      <table id="todotable"></table>
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
      var paraula = document.getElementById("afegirPalabra").value;

      const data = { palabra: paraula };

      console.log("paraula: ", paraula);
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
                    console.log("lenght",data.length);

          let tab = `<tr>
    <th>Palabra</th>
    </tr>`;

      for (var j = 0; j < data.length; j++) {
        tab += `<tr>
<td>${data[j].palabra}</td>
</tr>`;
      }
      document.getElementById("todotable").innerHTML = tab;

        });

      
    },

  },
};
</script>

<style>
</style>