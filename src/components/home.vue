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
import { mapState } from "vuex";
import { auth, onAuthStateChanged, database, setDoc, doc } from "/js/firebase.js";
export default {
  data() {
    return {
      timestamp: 0,
      link: "",
      mapa: [],
    }
  },
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
    async obtenerUbicacion() {
      // se está probando la opción de enviar la alerta en el momento con la ubicación actual
      // pero en caso de consolidarse, no se estaría ejecutando en este componente
      const Functionsuccess = ((ubi) => {
        console.log(ubi)
        console.log(`https://www.google.com/maps/@${ubi.coords.latitude},${ubi.coords.longitude},20z`)
        this.timestamp = ubi.timestamp
        this.link = `https://www.google.com/maps/@${ubi.coords.latitude},${ubi.coords.longitude},20z`
        this.mapa = [ubi.coords.latitude, ubi.coords.longitude];
      })
      function error(err){
        console.log(err);
      }
      var options = {
         // configuración
          enableHighAccuracy: true, // alta precisión
          maximumAge: 0, // no obtener cache
          timeout: 5000, // tiempo máximo a esperar
      };
      function getLocation(){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(Functionsuccess, error, options)
        }
        else{
          alert('Location no disponible')
        }
      }
      // Proceso de SetDoc
      let docRef = await doc(database, "alertas", this.usuario.viaje.clave)
      let data = {
        clave: this.usuario.viaje.clave,
        contacto: {
          correo: this.usuario.contacto.correo,
          tel: this.usuario.contacto.tel,
        },
        creador: this.usuario.nombre,
        horaEnvio: this.timestamp,
        link: this.link,
        mapa: this.mapa,
      }
      await setDoc(docRef, data) .then(() => console.log(data)) .catch(err => {
        console.log(err);
      })
    },
  },
  mounted() {
    this.obtenerUsuario();
  },
  computed: {
    usuario() {
      return this.$store.getters.usuario;
    }
  },
};
</script>
