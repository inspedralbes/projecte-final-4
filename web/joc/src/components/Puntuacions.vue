<template>
  <div>
    <table class="striped" id="todotable">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Tiempo</th>
          <th>Pistas</th>
          <th>Intentos 1</th>
          <th>Intentos 2</th>
          <th>Intentos 3</th>
          <th>Intentos 4</th>
          <th>Intentos 5</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="punt in listaPuntuaciones">
          <td>{{ punt.user }}</td>
          <td>{{ punt.tiempo }}</td>
          <td>{{ punt.pistas }}</td>
          <td>{{ punt.intentos1 }}</td>
          <td>{{ punt.intentos2 }}</td>
          <td>{{ punt.intentos3 }}</td>
          <td>{{ punt.intentos4 }}</td>
          <td>{{ punt.intentos5 }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: { Header },
  data() {
    return {
      listaPuntuaciones: [],
    };
  },
  mounted() {
    fetch("http://localhost:3001/api/todos/puntuaciones")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.listaPuntuaciones = data;
        console.log("lenght", data.length);
      });
  },
};
</script>

<style>
</style>