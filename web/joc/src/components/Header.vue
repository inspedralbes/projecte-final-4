<template>
  <nav class="#66bb6a green lighten-1 nav-header">
    <div class="nav-wrapper">
      <a href="/">
        <img alt="Qries" src="./img/logo2.png" width="100" height="70" />
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <RouterLink :to="'/puntuacions'">Puntuacions</RouterLink>
          <!-- <a href="/puntuacions">Puntuacions</a> -->
        </li>
        <li><a class="modal-trigger" href="#modal1">Admin</a></li>
      </ul>
    </div>
    <!-- MODAL LOGIN ADMIN -->
    <div class="container">
      <div id="modal1" style="overflow-y:hidden" class="modal #66bb6a green lighten-1">
        <div class="modal-content">
          <div class="row">
            <form class="col s12">
              <h1 class="negro">Administrador</h1>
              <div id="error" class="oculta">
                <a class="waves-effect waves-light btn red">Usuario o contraseña incorrecta</a>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label for="icon_prefix">Usuario</label>
                </div>
                <div class="input-field col s6">
                  <i class="material-icons prefix">lock</i>
                  <input id="icon_lock" type="password" class="validate" />
                  <label for="icon_lock">Contraseña</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style="display: flex; padding:10px">
          <div class="modal-footer #66bb6a green lighten-1">
            <a href="#!" class="waves-effect waves-light btn" v-on:click="login()">Iniciar Sesión</a>

            <a style="margin-left: 15px;" href="#!"
              class="modal-action modal-close waves-effect waves-light btn">Cerrar</a>
          </div>



        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import { AdminStore } from "../stores/store";
import { storeToRefs } from "pinia";
import CryptoJS from 'crypto-js';



export default {
  setup() {
    const main = AdminStore();

    const { user } = storeToRefs(main);

    return {
      user,
    };
  },
  data() {
    return {
      adminData: [],
      adminUser: "",
      adminPassword: "",
      inputUser: "",
      inputPassword: "",
      adminPasswordDecrypt: ""
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    });
    fetch("http://paraudl.back.alumnes.inspedralbes.cat:7099/api/todos/admin")
      .then((response) => response.json())
      .then((data) => (this.adminData = data));
  },
  methods: {
    login() {
      this.adminUser = this.adminData[0].usuario;
      this.adminPassword = this.adminData[0].contraseña;

      this.inputUser = document.getElementById("icon_prefix").value;
      this.inputPassword = document.getElementById("icon_lock").value;
      this.adminPasswordDecrypt = this.$CryptoJS.AES.decrypt(this.adminPassword, "admin").toString(CryptoJS.enc.Utf8);

      if (
        this.inputUser == this.adminUser &&
        this.inputPassword == this.adminPasswordDecrypt
      ) {
        this.user = "admin";
        this.$router.push("admin");
      } else {
        document.getElementById("error").classList.remove("oculta");
      }
    },
  },
};
</script>

<style>
.negro {
  color: black;
}

.oculta {
  display: none;
}

#icon_prefix {
  background-color: rgba(96, 233, 130, 0.589);
}

#icon_lock {
  background-color: rgba(96, 233, 130, 0.589);
}

.nav-header {
  height: 80px;
}
</style>