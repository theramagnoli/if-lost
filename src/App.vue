<template>
  <div class="px-5 desktop:max-w-[500px] desktop:m-auto" ref="views">
    <router-view></router-view>
  </div>
  <div class="grid">
    <div ref="tempodiv" class="alerta hidden">
      <div class="justify-self-end place-content-center">
        <p
          id="temporizador"
          ref="temporizador"
          class="text-white animate-[pulse_3s_infinite] pl-2 text-sm"
        ></p>
      </div>
      <button
        class="btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm"
        v-on:click="cancelarAlerta(0)"
        v-if="tempo == true"
        ref="btncancelar"
      >
        Cancelar alerta
      </button>
    </div>
  </div>
  <div class="grid mt-24">
    <div class="menu-hidden" ref="menu">
      <!-- <div class="grid grid-cols-3">
          <div class="flex col-span-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.svg?alt=media"
              class="max-h-6"
            />
            <p class="text-xs ml-3">pre-alpha</p>
          </div>
          <i class="fa-solid fa-angle-up justify-self-end"></i>
        </div> -->
      <div class="flex mb-2 justify-self-center row-span-2 pt-3" ref="accesos">
        <router-link class="btn-menu" to="/">
          <span class="material-symbols-rounded self-center justify-self-center"
            >home</span
          >
        </router-link>
        <router-link class="btn-menu" to="/404">
          <span
            class="material-symbols-rounded self-center justify-self-center"
          >
            newspaper
          </span></router-link
        >
        <router-link class="btn-menu" to="/cuenta"
          ><span
            class="material-symbols-rounded self-center justify-self-center"
          >
            person
          </span></router-link
        >
        <!-- <div>{{ myStatus }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  database,
  auth,
  onAuthStateChanged,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
} from "/js/firebase.js";

export default {
  data() {
    return {
      datos: [],
      tempo: false,
      uid: "",
      i: 0,
    };
  },
  computed: {
    usuario() {
      return this.$store.getters.usuario;
    },
    myStatus() {
      return this.$store.getters.myStatus;
    },
  },
  methods: {
    obtenerAlerta() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const refusuario = doc(database, "infoUsuarios", user.uid);
          const datos = await getDoc(refusuario);
          let info = datos.data();
          if (info.viaje) {
            const alerta = onSnapshot(
              doc(database, "viajes", info.viaje),
              (doc) => {
                let viaje = doc.data();
                if (viaje != null) {
                  if (viaje.alerta != null) {
                    this.temporizador(viaje.alerta);
                    this.tempo = true;
                    this.$refs.views.classList.add("pb-12");
                    this.$refs.accesos.classList.remove("hidden");
                  }
                }
              }
            );
          }
        } else {
          this.$refs.accesos.classList.add("hidden");
          this.$refs.tempodiv.classList.add("hidden");
        }
      });
    },
    temporizador(fecha) {
      let that = this;
      var tiempoRestante = new Date(fecha).getTime();
      that.$refs.tempodiv.classList.remove("hidden");
      that.i = setInterval(function () {
        var ahora = new Date().getTime();
        var distance = tiempoRestante - ahora;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (hours > 1) {
          document.getElementById("temporizador").innerHTML =
            "Tu alerta se enviará en<br/>" +
            hours +
            " horas " +
            minutes +
            " minutos ";
        } else {
          if (minutes < 10) {
            that.$refs.tempodiv.classList.add("bg-red-400");
          }
          if (minutes > 0) {
            document.getElementById("temporizador").innerHTML =
              "Tu alerta se enviará en<br/>" +
              minutes +
              " minutos " +
              seconds +
              " segundos ";
          } else {
            document.getElementById("temporizador").innerHTML =
              "Tu alerta se enviará en<br/>" + seconds + " segundos ";
          }
          if (distance < 0 && distance > -1000) {
            clearInterval(that.i);
            that.$refs.btncancelar.classList.add("hidden");
            document.getElementById("temporizador").innerHTML =
              "Estamos contactando a tu contacto de confianza";

            that.enviarCorreo();
            that.cancelarAlerta(5000);
          }
        }
      }, 1000);
    },
    async enviarCorreo() {
      // obtiene los datos y les da formato
      let datos = [];
      let nombres = this.usuario.nombre.split(" ");
      datos = {
        nombre: nombres[0],
        apellido: nombres[1],
        destino: this.usuario.viaje.destino,
        hora_alerta: this.usuario.viaje.llegada,
        clave: this.usuario.viaje.clave,
        email: this.usuario.contacto.correo,
      };
      // envía el correo
      emailjs.send("default_service", "alerta_iflost", datos).then(
        async () => {
          document.getElementById("temporizador").innerHTML =
            "Listo, enviamos un correo a tu contacto de confianza";
        },
        (err) => {}
      );
    },
    async cancelarAlerta(delay) {
      let that = this;
      const ref_fecha_alerta = doc(
        database,
        "viajes",
        this.usuario.viaje.clave
      );
      await updateDoc(ref_fecha_alerta, {
        alerta: null,
      });
      setTimeout(function () {
        that.$refs.tempodiv.classList.add("hidden");
      }, delay);
    },
  },
  async mounted() {
    this.obtenerAlerta();
    emailjs.init("NDQJF30o6mjc6lt_F");
    if (this.$route.name != "home") {
      this.$router.push("/");
    }
    console.log(this.usuario.perfil);
  },
  watch: {
    $route(a, de) {
      if (
        (de.name == "viajar" ||
          de.name == "login" ||
          de.name == "crearcuenta") &&
        a.name == "home"
      ) {
        this.$router.go();
      }
    },
  },
};
</script>
