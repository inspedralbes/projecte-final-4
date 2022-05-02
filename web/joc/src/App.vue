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

header{
  background-color: rgb(144, 96, 233);
}
</style>