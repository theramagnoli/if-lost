<template>
  <div class="grid">
    <h1 class="ttl-1">Mi perfil</h1>
    <div class="place-self-center grid">
      <img :src="perfil" alt="perfil" ref="perfil" class="perfil" />
    </div>
    <div>
      <h4 class="text-3xl font-medium text-center mt-5">
        {{ usuario.nombre }}
      </h4>
    </div>
    <div class="grid" v-if="paso == 0">
      <p class="mt-8 px-4 font-semibold text-lg">Acerca de ti</p>
      <p class="px-4" v-if="usuario.descripcion">
        {{ usuario.descripcion }}
      </p>
      <p class="px-4" v-else>Edita tu perfil para actualizar tu descripción</p>
      <p class="px-4">Viviendo en {{ usuario.ciudad }}</p>
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
      v-on:change="redimensionar($event)"
      class="hidden"
      required
    />
    <textarea
      ref="nuevadescripcion"
      class="inp"
      rows="3"
      :value="usuario.descripcion"
    ></textarea>
    <button v-on:click="guardar()" ref="guardar" class="btn-blue">
      Guardar cambios
    </button>
    <button v-on:click="paso = 0" class="btn-gray">Volver</button>
  </div>
</template>
<script>
import {
  database,
  auth,
  storage,
  signOut,
  doc,
  onAuthStateChanged,
  ref,
  uploadBytes,
  updateDoc,
} from "/js/firebase.js";
export default {
  data() {
    return {
      img: null,
      perfil: "",
      paso: 0,
      borrar_perfil: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    usuario() {
      return this.$store.getters.usuario;
    },
  },
  methods: {
    cerrarSesión() {
      signOut(auth)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          // mostrar error al cerrar sesión, intentar de nuevo
        });
    },
    obtenerUsuario() {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.$router.push("/login");
        }
      });
    },
    redimensionar(img) {
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
      this.$refs.guardar.innerHTML = "Guardando...";
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
        const storeref = ref(storage, "perfiles/" + that.usuario.id);
        await uploadBytes(storeref, img_dowsized).then((snapshot) => {});
      }
      await updateDoc(doc(database, "infoUsuarios", this.usuario.id), {
        descripcion: that.$refs.nuevadescripcion.value,
      });
      this.usuario.descripcion = this.$refs.nuevadescripcion.value;
      this.$refs.guardar.innerHTML = "Se guardaron los cambios";
      this.$refs.guardar.classList.add("bg-green-400", "hover:bg-green-400");
      this.$store.state.usuario.perfil = this.$refs.perfil.src;
      setTimeout(function (e) {
        that.$refs.guardar.innerHTML = "Guardar cambios";
        that.$refs.guardar.classList.remove(
          "bg-green-400",
          "hover:bg-green-400"
        );
      }, 1000);
    },
  },
  async mounted() {
    this.perfil = this.usuario.perfil;
    this.obtenerUsuario();
  },
};
</script>
