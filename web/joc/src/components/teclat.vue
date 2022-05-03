<template>
  <div id="keyboard-cont">
        <div class="first-row">
            <button class="waves-effect waves-light btn">q</button>
            <button class="waves-effect waves-light btn">w</button>
            <button class="waves-effect waves-light btn">e</button>
            <button class="waves-effect waves-light btn">r</button>
            <button class="waves-effect waves-light btn">t</button>
            <button class="waves-effect waves-light btn">y</button>
            <button class="waves-effect waves-light btn">u</button>
            <button class="waves-effect waves-light btn">i</button>
            <button class="waves-effect waves-light btn">o</button>
            <button class="waves-effect waves-light btn">p</button>
        </div>
        <div class="second-row">
            <button class="waves-effect waves-light btn">a</button>
            <button class="waves-effect waves-light btn">s</button>
            <button class="waves-effect waves-light btn">d</button>
            <button class="waves-effect waves-light btn">f</button>
            <button class="waves-effect waves-light btn">g</button>
            <button class="waves-effect waves-light btn">h</button>
            <button class="waves-effect waves-light btn">j</button>
            <button class="waves-effect waves-light btn">k</button>
            <button class="waves-effect waves-light btn">l</button>
        </div>
        <div class="third-row">
            <button class="waves-effect waves-light btn">Del</button>
            <button class="waves-effect waves-light btn">z</button>
            <button class="waves-effect waves-light btn">x</button>
            <button class="waves-effect waves-light btn">c</button>
            <button class="waves-effect waves-light btn">v</button>
            <button class="waves-effect waves-light btn">b</button>
            <button class="waves-effect waves-light btn">n</button>
            <button class="waves-effect waves-light btn">m</button>
            <button class="waves-effect waves-light btn">Enter</button>
        </div>
    </div>
</template>

<script>
export default {



}
</script>

<style>
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