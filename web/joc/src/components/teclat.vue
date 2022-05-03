<template>
  <div id="keyboard-cont">
        <div class="first-row">
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="q">q</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="w">w</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="e">e</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="r">r</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="t">t</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="y">y</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="u">u</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="i">i</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="o">o</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="p">p</button>
        </div>
        <div class="second-row">
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="a">a</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="s">s</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="d">d</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="f">f</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="g">g</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="h">h</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="j">j</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="k">k</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="l">l</button>
        </div>
        <div class="third-row">
            <button class="waves-effect waves-light btn">Del</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="z">z</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="x">x</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="c">c</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="v">v</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="b">b</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="n">n</button>
            <button v-on:click="select($event)" class="waves-effect waves-light btn" id="m">m</button>
            <button class="waves-effect waves-light btn">Enter</button>
        </div>
    </div>
</template>

<script>
export default {

methods:{
select: function(event) {
            targetId = event.currentTarget.id;
            console.log(targetId); // returns 'foo'
        }
}

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