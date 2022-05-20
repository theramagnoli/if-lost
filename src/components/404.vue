<template>
  <h1 class="ttl-1">Lo sentimos</h1>
  <div class="note mt-4 text-gray-400">
    Esta funcionalidad sigue en construcción, como gran parte de la aplicación,
    pero estamos trabajando día a día para mejorar tu experiencia y contribuir a
    tu seguridad
    <br />
    <br />
    El equipo de if(lost)
  </div>
  <button class="btn-blue" v-on:click="$router.push('/')">
    Volver a Inicio
  </button>
</template>

<script>
import { auth, onAuthStateChanged } from "/js/firebase.js";
export default {
  methods: {
    obtenerUsuario() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
          this.$router.push("/login");
        }
      });
    },
  },
  mounted() {
    this.obtenerUsuario();
  },
};
</script>
