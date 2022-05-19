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
          console.log("lenght", data.length);

          let tab = `<tr>
    <th>Palabra</th>
    <th>Definición</th>
    <th></th>
    </tr>`;

          for (var j = 0; j < data.length; j++) {
            tab += `<tr>
<td>${data[j].palabra}</td>
<td>${data[j].definicion}</td>
<td><button class="btn-floating btn-large waves-effect waves-light red" onClick="deletePalabra(this.id)" id="${data[j]._id}" name="${data[j]._id}"><i class="material-icons">delete_forever</i></button></td>
</tr>`;
          }
          document.getElementById("todotable").innerHTML = tab;
        });
    },
    deletePalabra(clicked_id) {
      console.log("id: ", clicked_id);
      //   fetch("http://localhost:3001/api/todos/" + clicked_id, {
      //     method: "DELETE",
      //   })
      //     .then((res) => res.text())
      //     .then((res) => console.log(res));
      // },
    },
  },
};
</script>

<style>
</style>