<template>
  <h1 class="ttl-1">Rastrear</h1>
  <div>
    <form v-on:submit.prevent="rastrear()" v-if="paso == 0" class="mt-4">
      <input
        type="text"
        placeholder="Clave de viaje"
        v-model="clave"
        class="inp"
      />
      <button type="submit" class="btn-gray">Buscar</button>
      <p class="note mt-4 text-gray-400">
        Recuerda que solamente podrás rastrear a una persona si te tiene entre
        sus contactos de confianza
      </p>
    </form>
  </div>
  <div v-if="paso == 1">
    <div class="mt-4 grid grid-cols-2 gap-2">
      <div>
        <p class="lbl">Destino</p>
        <p class="note">
          {{ datos.destino }}
          <a :href="datos.mapa" target="_blank" class="font-semibold"
            >(ver en Google Maps)</a
          >
        </p>
      </div>
      <p v-if="datos.infodestino.length > 0" class="note">
        <span class="notettl">Detalles</span>{{ datos.infodestino }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregaron más detalles</span>
      </p>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <p class="lbl">Hora de salida</p>
        <p class="note">{{ datos.salida }}</p>
      </div>
      <div>
        <p class="lbl">Hora de regreso</p>

        <p class="note">{{ datos.llegada }}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <img
        :src="datos.img"
        alt="Imagen de viaje"
        class="rounded-lg w-full mb-2 shadow-md"
      />
      <p v-if="datos.infoimg.length > 0" class="note">
        <span class="notettl">Nota de foto</span>
        {{ datos.infoimg }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregó nota de foto</span>
      </p>
    </div>
    <div>
      <p v-if="datos.nota.length > 0" class="note">
        <span class="notettl">Nota</span>{{ datos.nota }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregó una nota</span>
      </p>
    </div>
  </div>
</template>

<script>
import {
  database,
  auth,
  getDoc,
  doc,
  onAuthStateChanged,
} from "/js/firebase.js";
export default {
  data() {
    return {
      datos: [],
      clave: "",
      paso: 0,
    };
  },
  methods: {
    async rastrear() {
      const ref = doc(database, "viajes", this.clave.trim());
      const datos = await getDoc(ref);
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      if (datos.exists()) {
        this.datos = datos.data();
        if (this.datos.contacto.correo == this.usuario.correo) {
          if (this.datos.alerta == null) {
            this.paso = 1;
          } else {
            Toast.fire({
              icon: "error",
              title: "No se encontró el viaje",
              text: "Asegúrate de haber proporcionado la clave correcta",
            });
          }
        } else {
          Toast.fire({
            icon: "error",
            title:
              "Al parecer no eres un contacto de confianza del autor del viaje",
            text: "Revisa que tu clave sea la correcta",
          });
        }
      } else {
        Toast.fire({
          icon: "error",
          title: "No se encontró el viaje",
          text: "Asegúrate de haber proporcionado la clave correcta",
        });
      }
    },
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
  computed: {
    usuario() {
      return this.$store.state.usuario;
    },
  },
};
</script>
