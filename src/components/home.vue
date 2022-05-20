<template>
  <div>
    <h2 class="ttl-1">¿Qué quieres hacer?</h2>
  </div>
  <div class="place-items-center grid-cols-1">
    <div>
      <button class="btn-home" v-on:click="$router.push('/viajar')">
        Viajar seguro
      </button>
      <button class="btn-home" v-on:click="$router.push('/rastrear')">
        Rastrear a alguien
      </button>
      <button class="btn-home" v-on:click="$router.push('/404')">
        Enviar alerta ahora
      </button>
    </div>
  </div>
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
    viajar() {},
  },
  mounted() {
    this.obtenerUsuario();
  },
};
</script>
