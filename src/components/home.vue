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
      <button class="btn-home" v-on:click="obtenerUbicacion()">
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
    obtenerUbicacion() {
      // se está probando la opción de enviar la alerta en el momento con la ubicación actual
      // pero en caso de consolidarse, no se estaría ejecutando en este componente
      navigator.geolocation.getCurrentPosition(
        (ubi) =>
          console.log(
            // de obtener la ubicacion, la devuelve en Google Maps
            `https://www.google.com/maps/@${ubi.coords.latitude},${ubi.coords.longitude},20z`
          ),
        (err) => console.log(err), // de haber un error, lo devuelve
        {
          // configuración
          enableHighAccuracy: true, // alta precisión
          maximumAge: 0, // no obtener cache
          timeout: 5000, // tiempo máximo a esperar
        }
      );
    },
  },
  mounted() {
    this.obtenerUsuario();
  },
};
</script>
