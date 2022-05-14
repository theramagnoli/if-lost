<template>
  <h1>Rastrear</h1>
  <div>
    <form v-on:submit.prevent="rastrear()" v-if="paso == 0">
      <input type="text" placeholder="Clave de viaje" v-model="clave" />
      <button type="submit">Buscar</button>
    </form>
  </div>
  <div v-if="paso == 1">
    <h3>Viaje "{{ clave }}"</h3>
    <ul>
      <li>Destino: {{ datos.destino }} <a href="#">(ver en mapa)</a></li>
      <li>Información adicional del lugar: {{ datos.infoextra_destino }}</li>
      <li>Hora de salida: {{ datos.hora_salida }}</li>
      <li>Hora prevista de llegada: {{ datos.hora_llegada }}</li>
      <li>Información adicional: {{ datos.infoextra }}</li>
    </ul>
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
      const ref = doc(database, "viajes", this.clave);
      const datos = await getDoc(ref);
      if (datos.exists()) {
        this.datos = datos.data();
      }
      this.paso = 1;
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
  mounted() {},
};
</script>
