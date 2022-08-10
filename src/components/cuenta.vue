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
    <div class="grid">
      <p class="mt-8 px-4 font-semibold text-lg">Acerca de ti</p>
      <p class="px-4" v-if="usuario.descripcion">
        {{ usuario.descripcion }}
      </p>
      <p class="px-4" v-else>Edita tu perfil para actualizar tu descripción</p>
      <p class="px-4">
        <span class="font-medium"> Viviendo en</span> {{ usuario.ciudad }}
      </p>
      <button
        v-on:click="$router.push('/cuenta/config')"
        class="btn-blue mt-12"
      >
        Editar perfil
      </button>
      <button v-on:click="cerrarSesión()" class="btn-red">Cerrar sesión</button>
    </div>
  </div>
</template>
<script>
import { auth, signOut, onAuthStateChanged } from "/js/firebase.js";
export default {
  data() {
    return {
      img: null,
      perfil: "",
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
  },
  async mounted() {
    this.perfil = this.usuario.perfil;
    this.obtenerUsuario();
  },
};
</script>
