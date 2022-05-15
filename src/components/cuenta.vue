<template>
  <div class="grid">
    <h1 class="text-3xl font-bold text-center tracking-wide">Mi cuenta</h1>
    <div class="place-self-center pt-4 grid mt-6">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media"
        alt="perfil"
        ref="perfil"
        width="200"
        class="perfil"
      />
    </div>
    <h4 class="text-3xl font-semibold tracking-wide text-center mt-5">
      {{ nombres }}
    </h4>
    <p class="mt-2 text-center text-sm">
      <i class="fa-solid fa-location-pin"></i>&nbsp;&nbsp;{{ datos.ciudad }}
    </p>
    <div class="grid" v-if="paso == 0">
      <p class="mt-8 px-4 font-semibold">Acerca de ti</p>
      <p class="px-4" v-if="datos.descripcion">
        {{ datos.descripcion }}
      </p>
      <p class="px-4" v-else>
        ¿Qué te gustaría que el mundo supiera de {{ datos.nombres }}? Edita tu
        perfil para actualizar tu descripción
      </p>
      <button v-on:click="paso = 1" class="btn-blue mt-12">
        Editar perfil
      </button>
      <button v-on:click="cerrarSesión()" class="btn-red">Cerrar sesión</button>
    </div>
  </div>
  <div class="grid" v-if="paso == 1">
    <label
      type="input"
      for="perfil"
      class="btn-gray my-4 border-0 text-center justify-self-center"
    >
      Actualizar foto de perfil
    </label>
    <input
      id="perfil"
      type="file"
      accept=".jpg, .jpeg, .png"
      v-on:change="subirImg($event)"
      class="hidden"
      required
    />
    <textarea
      class="inp"
      placeholder="Añade una descripción. Dile al mundo sobre ti..."
      v-model="nueva_descripcion"
    ></textarea>
    <button v-on:click="guardar()" ref="guardar" class="btn-blue">
      Guardar cambios
    </button>
    <button v-on:click="reload()" class="btn-gray">Volver y descartar</button>
  </div>
</template>
<script>
import {
  database,
  auth,
  storage,
  signOut,
  getDoc,
  doc,
  onAuthStateChanged,
  ref,
  uploadBytes,
  updateDoc,
} from "/js/firebase.js";
export default {
  data() {
    return {
      datos: [],
      img: null,
      uid: "",
      paso: 0,
      nombres: "",
      nueva_descripcion: "",
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    cerrarSesión() {
      signOut(auth)
        .then(() => {
          this.$router.push("/if-lost/login");
        })
        .catch((error) => {});
    },
    obtenerUsuario() {
      let that = this;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid;
          this.nombres = user.displayName;
          if (this.$route.name == "cuenta") {
            fetch(
              "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2F" +
                this.uid
            )
              .then(function (resp) {
                return resp.json();
              })
              .then(function (data) {
                if (data.name) {
                  that.$refs.perfil.src =
                    "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2F" +
                    that.uid +
                    "?alt=media";
                }
              });
          }
        } else {
          this.$router.push("/if-lost/login");
        }
      });
    },
    subirImg(img) {
      let that = this;
      this.img = img.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.img);
      reader.onload = function (i) {
        const img_el = document.createElement("img");
        img_el.src = i.target.result;
        img_el.onload = function (e) {
          const canvas = document.createElement("canvas");
          const max_w = 500;
          const scale_size = max_w / e.target.width;
          canvas.width = max_w;
          canvas.height = scale_size * e.target.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
          const src_encoded = ctx.canvas.toDataURL(e.target, "image/png");
          that.$refs.perfil.src = src_encoded;
          that.img = 1;
        };
      };
    },
    async guardar() {
      let that = this;
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
      if (that.img == 1) {
        var img_dowsized = dataURLtoFile(that.$refs.perfil.src, "perfil.png");
        const storeref = ref(storage, "perfiles/" + that.uid);
        await uploadBytes(storeref, img_dowsized).then((snapshot) => {});
      }
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          updateDoc(doc(database, "infoUsuarios", user.uid), {
            descripcion: that.nueva_descripcion,
          });
        }
        this.$router.go();
      });
    },
    reload() {
      this.$router.go();
    },
  },
  async mounted() {
    this.obtenerUsuario();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const ref = doc(database, "infoUsuarios", user.uid);
        const datos = await getDoc(ref);
        if (datos.exists()) {
          this.datos = datos.data();
        }
        this.nueva_descripcion = this.datos.descripcion;
      }
    });
  },
};
</script>
