<template>
  <div class="p-5 desktop:max-w-[400px] desktop:m-auto" ref="views">
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
  <div class="grid grid-cols-1 mt-24">
    <div class="menu-hidden" ref="menu">
      <div class="grid grid-rows-2">
        <i class="fa-solid fa-angle-up justify-self-center"></i>
        <div class="grid grid-cols-2">
          <div class="grid">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.svg?alt=media"
              class="max-h-12 p-3 self-center"
            />
          </div>
          <div class="flex mb-2 justify-self-end" ref="accesos">
            <router-link class="btn-menu" to="/">
              <i class="fa-solid fa-house justify-self-center self-center"></i
            ></router-link>
            <router-link class="btn-menu" to="/404">
              <i
                class="fa-solid fa-newspaper justify-self-center self-center"
              ></i
            ></router-link>
            <router-link class="btn-menu" to="/cuenta"
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
  where,
  orderBy,
  query,
  collection,
  limit,
  getDocs,
} from "/js/firebase.js";
// import { accountSid, authToken, client } from "/js/twilio.js";

export default {
  data() {
    return {
      datos: [],
      tempo: false,
      uid: "",
    };
  },
  computed: {
    usuario() {
      return this.$store.state.usuario;
    },
  },
  methods: {
    temporizador(fecha) {
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
        if (distance < 1) {
          clearInterval(x);
          that.$refs.btncancelar.classList.add("hidden");
          document.getElementById("temporizador").innerHTML =
            "Nos estámos poniendo en contancto con tu contacto de confianza";
          that.enviarCorreo();
          that.cancelarAlerta(7000);
        }
      }, 1000);
    },
    async enviarCorreo() {
      // obtiene los datos y les da formato
      // está enviando un minuto antes los correos, y está enviando más de los que debería enviar
      // CORREGIR
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
      // client.messages
      //   .create({
      //     body: "Esto es una prueba, if (lost)",
      //     messagingServiceSid: "MG7918be682ebda2770ef29c0524743b78",
      //     to: "+13475999523",
      //   })
      //   .then((message) => {
      //     console.log(message.sid);
      //     document.getElementById("temporizador").innerHTML =
      //       "Listo, enviamos un correo a tu contacto de confianza";
      //     this.cancelarAlerta(10000);
      //   })
      //   .done();
    },
    obtenerTemporizador() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const q = query(
            collection(database, "viajes"),
            where("creador", "==", this.usuario.id),
            orderBy("creado", "desc"),
            limit(1)
          );
          let viaje,
            ultimoviaje = await getDocs(q);
          ultimoviaje.forEach((doc) => {
            viaje = doc.data();
          });
          if (viaje.alerta > 1) {
            this.temporizador(viaje.alerta);
            this.tempo = true;
            this.$refs.views.classList.add("mb-12");
          }
          this.$refs.accesos.classList.remove("hidden");
        } else {
          this.$refs.accesos.classList.add("hidden");
          this.$refs.tempodiv.classList.add("hidden");
        }
      });
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
  mounted() {
    this.obtenerTemporizador();
    emailjs.init("NDQJF30o6mjc6lt_F");
    if (this.$route.name != "home") {
      this.$router.push("/");
    }
    // client.messages
    //   .create({
    //     body: "Esto es una prueba, if (lost)",
    //     messagingServiceSid: "MG7918be682ebda2770ef29c0524743b78",
    //     to: "+13475999523",
    //   })
    //   .then((message) => {
    //     console.log(message.sid);
    //     document.getElementById("temporizador").innerHTML =
    //       "Listo, enviamos un correo a tu contacto de confianza";
    //     this.cancelarAlerta(10000);
    //   })
    //   .done();
  },
  watch: {
    $route: function (a, de) {
      this.obtenerTemporizador();
    },
  },
};
</script>
