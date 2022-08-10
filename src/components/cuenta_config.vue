<template>
  <div>
    <h1 class="ttl-1">Configuración</h1>
    <div class="place-self-center flex">
      <img
        :src="usuario2.perfil"
        alt="perfil"
        ref="perfil"
        class="perfil h-28"
      />
      <div class="grid ml-4">
        <input
          type="text"
          v-model="usuario2.nombres"
          class="text-2xl font-medium inp self-center"
        />
        <input
          type="text"
          v-model="usuario2.apellidos"
          class="text-2xl font-medium mt-2 inp self-center"
        />
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
      </div>
    </div>
    <div class="grid">
      <p class="px-4 font-semibold text-lg">Acerca de ti</p>
      <textarea class="px-4 inp" v-model="usuario2.descripcion"> </textarea>
      <div class="flex mt-2">
        <p class="px-4 w-1/2 self-center font-medium">Viviendo en</p>
        <input v-model="usuario2.ciudad" class="inp" />
      </div>
      <p class="mt-8 px-4 font-semibold text-lg">Contacto de confianza</p>
      <div class="flex mt-2">
        <p class="px-4 w-1/2 self-center font-medium">Nombre</p>
        <input type="text" class="inp" v-model="usuario2.contacto.nombre" />
      </div>
      <div class="flex mt-2">
        <p class="px-4 w-1/2 self-center font-medium">Correo</p>
        <input type="text" class="inp" v-model="usuario2.contacto.correo" />
      </div>
      <div class="flex mt-2">
        <p class="px-4 w-1/2 self-center font-medium">Numero</p>
        <input type="text" class="inp" v-model="usuario2.contacto.tel" />
      </div>
      <button class="btn-blue mt-12" ref="guardar" v-on:click="guardar()">
        Guardar cambios
      </button>
    </div>
  </div>
</template>

<script>
import {
  database,
  storage,
  doc,
  ref,
  uploadBytes,
  updateDoc,
  auth,
  updateProfile,
} from "/js/firebase.js";
export default {
  data() {
    return {
      img: null,
      usuario2: {
        contacto: {},
      },
    };
  },
  computed: {
    usuario() {
      return this.$store.getters.usuario;
    },
  },
  mounted() {
    this.usuario2 = this.usuario;
  },
  methods: {
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
        nombres: that.usuario2.nombres,
        apellidos: that.usuario2.apellidos,
        descripcion: that.usuario2.descripcion,
        ciudad: that.usuario2.ciudad,
        correo_contacto: that.usuario2.contacto.correo,
        numero_contacto: that.usuario2.contacto.tel,
        nombre_contacto: that.usuario2.contacto.nombre,
      });
      await updateProfile(auth.currentUser, {
        displayName: this.usuario2.nombres + " " + this.usuario2.apellidos,
      });
      this.$refs.guardar.innerHTML = "Se guardaron los cambios";
      this.$refs.guardar.classList.add("bg-green-400", "hover:bg-green-400");
      this.$store.state.usuario.perfil = this.$refs.perfil.src;
      this.$store.state.usuario.nombre =
        this.usuario2.nombres + " " + this.usuario2.apellidos;
      setTimeout(function (e) {
        that.$refs.guardar.innerHTML = "Guardar cambios";
      }, 1000);
    },
  },
};
</script>

<style></style>
