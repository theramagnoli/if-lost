<template>
  <div class="h-full w-full fixed bg-black hidden" ref="loader"></div>
  <div class="p-5" ref="view"><router-view></router-view></div>
  <div
    ref="tempodiv"
    v-if="tempo == true"
    class="fixed bottom-10 pb-14 pt-3 rounded-t-3xl w-full bg-green-400 text-center text-white text-xs grid grid-cols-2 gap-10"
  >
    <div class="justify-self-end place-content-center">
      <div>
        <h4>Tu alerta se enviará en:</h4>
        <div id="temporizador" ref="temporizador"></div>
      </div>
    </div>
    <div class="justify-self-start place-content-center">
      <button
        class="rounded-full w-full bg-sky-600 px-2 py-2 text-white hover:bg-sky-800"
        v-on:click="cancelarAlerta()"
        v-if="tempo == true"
      >
        Cancelar alerta
      </button>
    </div>
  </div>
  <div class="grid grid-cols-1 mt-28">
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
          <div class="grid grid-cols-2 mb-2" ref="accesos">
            <router-link class="btn-menu" to="/">
              <i class="fa-solid fa-house justify-self-center self-center"></i
            ></router-link>
            <router-link class="btn-menu" to="cuenta"
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
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("temporizador").innerHTML =
          hours + " hrs " + minutes + " min " + seconds + " seg ";
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
      let arr = this.datos.destino.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      let destino = arr.join(" ");
      datos = {
        nombre: nombres[0],
        apellido: nombres[1],
        destino: destino,
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
          const ref = doc(database, "viajes", user.uid);
          const datos = await getDoc(ref);
          if (datos.exists()) {
            this.datos = datos.data();
            if (this.datos.fecha_alerta > 1) {
              this.Temporizador(this.datos.fecha_alerta);
              this.tempo = true;
              this.$refs.views.classList.remove("mb-28");
              this.$refs.views.classList.add("mb-36");
            }
          }
        } else {
          this.$refs.accesos.classList.add("hidden");
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
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.$refs.accesos.classList.remove("hidden");
      } else {
        this.$refs.accesos.classList.add("hidden");
      }
    });
  },
  watch: {
    $route: function (to, from) {},
  },
};
</script>
