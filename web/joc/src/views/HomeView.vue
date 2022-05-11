<script>
import "materialize-css";
import joc from "../components/joc.vue";
import Header from '../components/Header.vue';


export default {
  components: {
    joc,
    Header,
  
  },

  
};
var timerVariable = setInterval(countUpTimer, 1000);
var totalSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  var hour = Math.floor(totalSeconds / 3600);
  var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);
  document.getElementById("count_up_timer").innerHTML = minute + ":" + seconds;
}
</script>

<template>
<div>
  <Header/>
    <main>
    <div class="row">
    
    <div class="col s12 m4 l2"> 
      <div id="count_up_timer">00:00</div>
      <!-- <button id="stop_count_up_timer" onclick="clearInterval(timerVariable)">Stop Time</button> -->
    
      </div>

    <div class="col s12 m4 l8">
     <h1 id="lletres"></h1>
    <div class="row main-container center-align">
      <div class="col s12 center-align">
        <joc />
      </div>

    </div>
    </div>
    <div class="col s12 m4 l2">
<h2>Intents</h2>
    <a class="btn-floating btn-large waves-effect waves-light red">{{
      this.intents1
    }}</a>

    </div>
  </div>
   
  </main>
</div>

</template>

<style>
.col-grid {
  border: 2px solid black;
 
}
.col{
   height: 100px;
  width: 50px;
}
#count_up_timer{
  padding: 50%;
  font-size: 100px;
}

</style>