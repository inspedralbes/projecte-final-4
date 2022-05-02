<template>
  <div>
    <h1>Lletres</h1>
    <div class="row">
      <div class="lletre col m2" id="lletre-0"></div>
      <div class="lletre col m2" id="lletre-1">F</div>
      <div class="lletre col m2" id="lletre-2">E</div>
    </div>
    <div class="row">
      <div class="lletre col m2" id="lletre-3">N</div>
      <div class="lletre col m2" id="lletre-4">A</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const text = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 5; i++) {
      text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
      document.getElementById("lletre-" + i).innerHTML = text[i];
      console.log(i);
      console.log(text);
    }
  },
};
</script>

<style>
.lletre {
  border: 2px solid black;
  height: 150px;
  width: 150px;
}
</style>