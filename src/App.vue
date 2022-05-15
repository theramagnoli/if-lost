<template>
  <div class="p-5" ref="views"><router-view></router-view></div>
  <div class="grid">
    <div ref="tempodiv" class="alerta hidden">
      <div class="justify-self-end place-content-center">
        <p
          id="temporizador"
          ref="temporizador"
          class="text-white animate-pulse pl-2 text-sm font-medium"
        ></p>
      </div>
      <button
        class="btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm"
        v-on:click="cancelarAlerta()"
        v-if="tempo == true"
      >
        Cancelar alerta
      </button>
    </div>
  </div>
  <div class="grid grid-cols-1 mt-24">
    <div class="menu-hidden" ref="menu">
      <div class="grid grid-rows-2">
        <i
          class="fa-solid fa-angle-up justify-self-center hover:animate-pulse"
        ></i>
        <div class="grid grid-cols-2">
          <div class="grid">
            <img
              src="images/logonegro.png"
              alt="logo"
              class="max-h-12 p-3 self-center"
            />
          </div>
          <div class="flex mb-2" ref="accesos">
            <router-link class="btn-menu" to="/if-lost/">
              <i class="fa-solid fa-house justify-self-center self-center"></i
            ></router-link>
            <router-link class="btn-menu" to="/if-lost/404">
              <i
                class="fa-solid fa-newspaper justify-self-center self-center"
              ></i
            ></router-link>
            <router-link class="btn-menu" to="/if-lost/cuenta"
              ><i class="fa-solid fa-user justify-self-center self-center"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  database,
  auth,
  getDoc,
  onAuthStateChanged,
  doc,
  updateDoc,
} from "/js/firebase.js";

export default {
  data() {
    return {
      datos: [],
      tempo: false,
      uid: "",
    };
  },
  methods: {
    Temporizador(fecha) {
      let that = this;
      var countDownDate = new Date(fecha).getTime();
      this.$refs.tempodiv.classList.remove("hidden");
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
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
          document.getElementById("temporizador").innerHTML =
            "Tu alerta se enviará en<br/>" +
            minutes +
            " minutos " +
            seconds +
            " segundos ";
        }
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("temporizador").innerHTML =
            "Nos estámos poniendo en contancto con tu contacto de confianza";
          that.enviarCorreo();
        }
      }, 1000);
    },
    async enviarCorreo() {
      // obtiene los datos y les da formato
      let nombre,
        datos = [];
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          nombre = user.displayName;
        }
      });
      let nombres = nombre.split(" ");
      datos = {
        nombre: nombres[0],
        apellido: nombres[1],
        destino: this.destino,
        hora_alerta: this.datos.hora_llegada,
        clave: this.uid,
        email: this.datos.correo_contacto,
      };
      // envía el correo
      emailjs.send("default_service", "alerta_iflost", datos).then(
        async () => {
          document.getElementById("temporizador").innerHTML =
            "Listo, enviamos un correo a tu contacto de confianza";
          const ref_fecha_alerta = doc(database, "viajes", clave);
          await updateDoc(ref_fecha_alerta, {
            fecha_alerta: 0,
          });
        },
        (err) => {}
      );
    },
    obtenerTemporizador() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.uid = user.uid;
          this.$refs.accesos.classList.remove("hidden");
          const ref = doc(database, "viajes", user.uid);
          const datos = await getDoc(ref);
          if (datos.exists()) {
            this.datos = datos.data();
            if (this.datos.fecha_alerta > 1) {
              this.Temporizador(this.datos.fecha_alerta);
              this.tempo = true;
              this.$refs.views.classList.add("mb-12");
            }
          }
        } else {
          this.$refs.accesos.classList.add("hidden");
          this.$refs.tempodiv.classList.add("hidden");
        }
      });
    },
    async cancelarAlerta() {
      const ref_fecha_alerta = doc(database, "viajes", this.uid);
      await updateDoc(ref_fecha_alerta, {
        fecha_alerta: 0,
      });
      location.reload();
    },
  },
  mounted() {
    this.obtenerTemporizador();
    emailjs.init("NDQJF30o6mjc6lt_F");
  },
  watch: {
    $route: function (to, from) {
      this.obtenerTemporizador();
    },
  },
};
</script>
