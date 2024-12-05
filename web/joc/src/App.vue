<template>

    <Router-View />

</template>

<script>
import {RouterLink, RouterView} from "vue-router";
import M from 'materialize-css'

export default {
mounted () {
    M.AutoInit()
}
}
</script>

<style>

body{
  background-color: rgba(96, 233, 130, 0.589);
}
</style>