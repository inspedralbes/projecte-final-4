<template>
  <div>
    <h2>1 Paraula</h2>
    <div class="row">
      <div class="col-grid col m2">{{ this.paraula1[0] }}</div>
      <div class="col-grid col m2">{{ this.paraula1[1] }}</div>
      <div class="col-grid col m2">{{ this.paraula1[2] }}</div>
      <div class="col-grid col m2">{{ this.paraula1[3] }}</div>
      <div class="col-grid col m2">{{ this.paraula1[4] }}</div>
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
    <div id="keyboard-cont">
      <div class="first-row">
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="q"
        >
          q
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="w"
        >
          w
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="e"
        >
          e
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="r"
        >
          r
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="t"
        >
          t
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="y"
        >
          y
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="u"
        >
          u
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="i"
        >
          i
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="o"
        >
          o
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="p"
        >
          p
        </button>
      </div>
      <div class="second-row">
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="a"
        >
          a
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="s"
        >
          s
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="d"
        >
          d
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="f"
        >
          f
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="g"
        >
          g
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="h"
        >
          h
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="j"
        >
          j
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="k"
        >
          k
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="l"
        >
          l
        </button>
      </div>
      <div class="third-row">
        <button class="waves-effect waves-light btn red">Del</button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="z"
        >
          z
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="x"
        >
          x
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="c"
        >
          c
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="v"
        >
          v
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="b"
        >
          b
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="n"
        >
          n
        </button>
        <button
          v-on:click="apretar($event)"
          class="waves-effect waves-light btn"
          name="m"
        >
          m
        </button>
        <button class="waves-effect waves-light btn green">Enter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paraula1: ["-", "-", "-", "-", "-"],
      estatParaula1: [1, 1, 0, 0, 0],
      solucio: ["C", "A", "M", "I", "O"],
      letra: "",
      count: 0,
    };
  },
  methods: {
    apretar(e) {
      this.letra = e.target.name;
      console.log(e.target.name);

      this.paraula1[this.count] = this.letra;
      this.count++;
    },
  },
};
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