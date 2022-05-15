<template>
  <h1 class="ttl-1">Crear viaje</h1>
  <div class="grid mb-8">
    <div class="justify-self-center flex text-xs">
      <h2
        class="font-semibold text-center mt-4 bg-gray-50 text-gray-900 pt-2 pb-2 w-8 rounded-full shadow-inner"
      >
        {{ paso + 1 }}
      </h2>
      <h2 class="text-center mt-4 pt-2 pb-2 w-10">de</h2>
      <h2
        class="font-semibold text-center mt-4 bg-gray-50 text-gray-900 pt-2 pb-2 w-8 rounded-full shadow-inner"
      >
        5
      </h2>
    </div>
  </div>
  <div v-if="paso == 0">
    <form v-on:submit.prevent="paso++">
      <p class="lbl">Dinos a dónde vas</p>
      <div class="flex">
        <input
          type="text"
          id="destino"
          v-model="destino"
          placeholder="Un lugar"
          class="inp flex-initial w-[88%]"
          required
        />
        <button
          v-on:click.prevent="buscarEnMapa()"
          class="btn-blue w-[10%] ml-[2%] flex-1 mt-0"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas shadow-xl">
          <!-- en src, la ciudad hay que reemplazarla por la que el usuario tenga en sus datos -->
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=monterrey&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <div>
        <p class="lbl mt-4">
          Aquí puedes agregar detalles del lugar, si gustas
        </p>
        <textarea
          v-model="info_destino"
          placeholder="ej. La casa de Jorge"
          class="inp"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn-gray">Continuar</button>
    </form>
  </div>
  <div v-if="paso == 1">
    <form v-on:submit.prevent="paso++">
      <div class="grid">
        <p class="lbl text-center">Dinos a qué ahora planeas ir</p>
        <div class="flex place-content-center">
          <input
            type="number"
            v-model="hora_salida"
            required
            max="24"
            class="inp w-[30%] text-center"
          />
          <p class="mx-2 place-self-center">:</p>
          <input
            type="number"
            v-model="minutos_salida"
            required
            max="60"
            class="inp w-[30%] text-center"
          />
        </div>
        <p class="lbl text-center mt-4">Y la hora a la que planeas regresar</p>
        <div class="flex place-content-center">
          <input
            type="number"
            v-model="hora_alerta"
            required
            max="24"
            class="inp w-[30%] text-center"
          />
          <p class="mx-2 place-self-center">:</p>
          <input
            type="number"
            v-model="minutos_alerta"
            required
            max="60"
            class="inp w-[30%] text-center"
          />
        </div>
      </div>
      <button type="submit" class="btn-gray mt-12">Continuar</button>
      <button v-on:click.prevent="paso--" class="btn-gray">Volver</button>
    </form>
  </div>
  <div v-if="paso == 2">
    <form v-on:submit.prevent="paso++">
      <div class="flex mt-2">
        <p class="lbl w-[88%] align-self-end flex-initial" id="tomafoto">
          Toma una foto, si quieres
        </p>
        <button
          type="button"
          v-on:click="tomarFoto()"
          class="btn-blue w-[10%] ml-[2%] mt-0 py-0"
        >
          <i class="fa-solid fa-camera"></i>
        </button>
      </div>
      <div class="mt-2 shadow-xl" ref="divfoto">
        <video
          width="400"
          height="300"
          autoplay
          id="camera"
          class="mt-2 rounded-t-lg w-full"
          hidden
        ></video>
        <canvas
          id="canvas"
          class="mt-2 rounded-t-lg w-full"
          width="400"
          height="300"
          hidden
        ></canvas>
        <img
          :src="srcimg"
          width="400"
          height="300"
          ref="imgviaje"
          class="rounded-lg mt-2 w-full"
        />
        <button
          type="button"
          id="capturar"
          class="rounded-b-lg w-full bg-sky-600 py-2 text-white hover:bg-sky-800 flex-intial"
          hidden
        >
          Tomar foto
        </button>
      </div>
      <div ref="notafoto">
        <p class="lbl mt-4">Agrega una nota a la foto</p>
        <textarea
          v-model="infofoto"
          class="inp"
          rows="3"
          placeholder="ej. Así voy vestido"
        />
      </div>
      <button type="submit" class="btn-gray">Continuar</button>
      <button v-on:click.prevent="paso--" class="btn-gray">Volver</button>
    </form>
  </div>
  <div v-if="paso == 3">
    <form v-on:submit.prevent="previsualizar()">
      <p class="lbl mt-2">
        En este espacio puedes agregar una nota para tu contacto de confianza
      </p>
      <textarea
        v-model="infoextra"
        class="inp"
        rows="5"
        placeholder="ej. Llevo un camisa blanca"
      />
      <button type="submit" class="btn-gray">Continuar</button>
      <button v-on:click.prevent="paso--" class="btn-gray">Volver</button>
    </form>
  </div>

  <div v-if="paso == 4">
    <div class="note grid">
      <p class="font-semibold">
        Asegúrate que todos los detalles de tu viaje sean correctos;
        <span class="font-normal"
          >en caso de no avisar antes de la hora prevista, se enviarán a tu
          contacto de confianza</span
        >
      </p>
      <button class="btn-gray w-[60%] justify-self-end">
        Ver mi contacto de confianza
      </button>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <div>
        <p class="lbl">Destino</p>
        <p class="note">
          {{ destino }}
          <a :href="mapa_google" target="_blank" class="font-semibold"
            >(ver en Google Maps)</a
          >
        </p>
      </div>
      <p v-if="info_destino.length > 0" class="note">
        <span class="notettl">Detalles</span>{{ info_destino }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregaron más detalles</span>
      </p>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <p class="lbl">Hora de salida</p>
        <p class="note">{{ hora_salida }}:{{ minutos_salida }}</p>
      </div>
      <div>
        <p class="lbl">Hora de regreso</p>

        <p class="note">{{ hora_alerta }}:{{ minutos_alerta }}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <img
        src=""
        alt="Imagen de viaje"
        id="img_prev"
        class="rounded-lg w-full mb-2 shadow-md"
      />

      <p v-if="infofoto.length > 0" class="note">
        <span class="notettl">Nota de foto</span>
        {{ infofoto }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregó nota de foto</span>
      </p>
    </div>
    <div>
      <p v-if="infoextra.length > 0" class="note">
        <span class="notettl">Nota</span>{{ infoextra }}
      </p>
      <p v-else class="note">
        <span class="notettl">No se agregó una nota</span>
      </p>
    </div>
    <button v-on:click.prevent="crearViaje()" v-if="paso == 4" class="btn-blue">
      Confirmar viaje
    </button>
    <button v-on:click.prevent="paso--" class="btn-gray">Volver</button>
  </div>
</template>

<script>
import {
  auth,
  database,
  storage,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  ref,
  uploadBytes,
} from "/js/firebase.js";
export default {
  data() {
    return {
      destino: "",
      info_destino: "",
      hora_salida: "12",
      minutos_salida: "00",
      hora_alerta: "17",
      minutos_alerta: "00",
      infoextra: "",
      img: "",
      imgurl: "",
      infofoto: "",
      mapa: "",
      mapa_google: "",
      paso: 0,
      datos: [],
      uid: "",
      srcimg:
        "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/assets%2Fcamera.png?alt=media",
    };
  },
  mounted() {
    this.obtenerUsuario();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const ref = doc(database, "infoUsuarios", user.uid);
        const datos = await getDoc(ref);
        if (datos.exists()) {
          this.datos = datos.data();
        }
      }
    });
  },
  methods: {
    buscarEnMapa() {
      let newsrc =
        "https://maps.google.com/maps?q=" +
        this.destino +
        "&t=&z=13&ie=UTF8&iwloc=&output=embed";
      let map = document.querySelector("#gmap_canvas");
      map.setAttribute("src", newsrc);
      this.mapa = newsrc;
    },
    obtenerHoraComoFecha(hora, minutos, al_otro_día) {
      let horaComoFecha;
      if (al_otro_día == false) {
        const hoy = new Date();
        horaComoFecha = hoy.setHours(parseInt(hora), parseInt(minutos), 0);
      } else {
        const hoy = new Date();
        const mañana = new Date(hoy);
        mañana.setDate(mañana.getDate() + 1);
        horaComoFecha = mañana.setHours(parseInt(hora), parseInt(minutos), 0);
      }
      return horaComoFecha;
    },
    async crearViaje() {
      let sig_dia;
      let hoy = new Date();
      let ahora = hoy.getHours();
      if (this.hora_alerta < this.hora_salida || this.hora_alerta < ahora) {
        sig_dia = true;
      } else {
        sig_dia = false;
      }
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          await setDoc(doc(database, "viajes", user.uid), {
            correo_contacto: this.datos.correo_contacto,
            destino: this.destino,
            mapa: this.mapa_google,
            infoextra_destino: this.info_destino,
            hora_salida: this.hora_salida + ":" + this.minutos_salida,
            hora_llegada: this.hora_alerta + ":" + this.minutos_alerta,
            infoextra: this.infoextra,
            fecha_alerta: this.obtenerHoraComoFecha(
              this.hora_alerta,
              this.minutos_alerta,
              sig_dia
            ),
            img: this.imgurl,
            infoimg: this.infofoto,
          });
        }
        this.$router.push("/if-lost/");
      });
    },
    async previsualizar() {
      await this.paso++;
      let img_prev = document.querySelector("#img_prev");
      let arr = this.destino.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      this.destino = arr.join(" ");
      this.mapa_google =
        "https://maps.google.com/maps?q=" +
        this.destino +
        "&t=&z=13&ie=UTF8&iwloc=&";
      if (this.imgurl.length > 1) {
        img_prev.src =
          "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/viajes%2F" +
          this.uid +
          "?alt=media";
      } else {
        img_prev.src = "/images/viajedef.jpg";
      }
    },
    obtenerUsuario() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid;
        } else {
          this.$router.push("/if-lost/login");
        }
      });
    },
    async tomarFoto() {
      this.srcimg =
        "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/assets%2Floading.gif?alt=media";
      let that = this;
      let video = document.querySelector("#camera");
      let canvas = document.querySelector("#canvas");
      let capturar = document.querySelector("#capturar");
      let ptomarfoto = document.querySelector("#tomafoto");
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      this.$refs.imgviaje.setAttribute("hidden", "true");
      this.$refs.divfoto.removeAttribute("hidden");
      canvas.setAttribute("hidden", "true");
      video.removeAttribute("hidden");
      capturar.removeAttribute("hidden");
      video.srcObject = stream;
      capturar.addEventListener("click", function () {
        video.setAttribute("hidden", "true");
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        this.img = canvas.toDataURL("image/jpeg");
        that.subirImg(this.img);
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
        capturar.setAttribute("hidden", "true");
        ptomarfoto.innerHTML = "¿No te gustó? Intenta de nuevo";
      });
    },
    subirImg(img) {
      this.$refs.imgviaje.removeAttribute("hidden");
      let that = this;
      const img_el = document.createElement("img");
      img_el.src = img;
      img_el.onload = function (e) {
        const canvas = document.createElement("canvas");
        const max_w = 800;
        const scale_size = max_w / e.target.width;
        canvas.width = max_w;
        canvas.height = scale_size * e.target.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
        const src_encoded = ctx.canvas.toDataURL(e.target, "image/png");
        function dataURLtoFile(dataurl, filename) {
          var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, { type: mime });
        }
        var img_dowsized = dataURLtoFile(src_encoded, "perfil.png");
        const storeref = ref(storage, "viajes/" + that.uid);
        uploadBytes(storeref, img_dowsized).then((snapshot) => {
          that.imgurl =
            "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/viajes%2F" +
            that.uid +
            "?alt=media";
          that.srcimg = src_encoded;
        });
      };
    },
  },
  watch: {},
};
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
  pointer-events: none;
}
</style>
