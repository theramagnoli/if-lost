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
      <p v-if="datos.infoextra_destino.length > 0" class="note">
        <span class="notettl">Detalles</span>{{ datos.info_destino }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregaron más detalles</span>
      </p>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <p class="lbl">Hora de salida</p>
        <p class="note">{{ datos.hora_salida }}</p>
      </div>
      <div>
        <p class="lbl">Hora de regreso</p>

        <p class="note">{{ datos.hora_llegada }}</p>
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
      <p v-if="datos.infoextra.length > 0" class="note">
        <span class="notettl">Nota</span>{{ datos.infoextra }}
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
      this.obtenerUsuario();
      const ref = doc(database, "viajes", this.clave.trim());
      const datos = await getDoc(ref);
      if (datos.exists()) {
        this.datos = datos.data();
        this.paso = 1;
      } else {
      }
    },
    obtenerUsuario() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
          this.$router.push("/if-lost/login");
        }
      });
    },
  },
  mounted() {},
};
</script>
