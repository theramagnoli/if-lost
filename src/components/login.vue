<template>
  <div>
    <h1 class="ttl-1">Bienvenido</h1>
    <h3 class="subttl">Nos alegra verte otra vez</h3>
    <form v-on:submit.prevent="iniciarSesión()" class="mt-8">
      <input
        class="inp"
        type="email"
        placeholder="Tu correo electrónico"
        v-model="correo"
      />
      <input
        class="inp mt-4"
        type="password"
        placeholder="Tu contraseña"
        v-model="contraseña"
      />
      <button type="submit" id="entrar" class="btn-blue">
        Entrar a mi cuenta
      </button>
    </form>
    <div class="mt-4 grid">
      <h3 class="subttl">¿Aún no tienes cuenta?</h3>
      <div class="place-self-center">
        <button
          class="font-semibold underline"
          v-on:click="$router.push('/crearcuenta')"
        >
          Crea una
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "/js/firebase.js";

export default {
  data() {
    return {
      correo: "",
      contraseña: "",
    };
  },
  methods: {
    iniciarSesión() {
      signInWithEmailAndPassword(auth, this.correo, this.contraseña)
        .then((user) => {
          this.$router.push("/");
        })
        .catch((error) => {
          let mensaje;
          switch (error.code) {
            case "auth/user-not-found":
              mensaje =
                "El usuario no existe. Si no aún no tienes cuenta, crea una";
              break;
            case "auth/wrong-password":
              mensaje = "Contraseña incorrecta";
              break;
            case "auth/too-many-requests":
              mensaje = "Ya intentaste muchas veces, espera un momento";
              break;
            default:
              mensaje =
                "Ha ocurrido un error desconocido, revisa que hayas ingresado correctamente tus datos";
              break;
          }
          Swal.fire({
            toast: true,
            position: "bottom",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            icon: "error",
            title: mensaje,
          });
        });
    },
    obtenerUsuario() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push("/");
        }
      });
    },
  },
  mounted() {
    this.obtenerUsuario;
  },
};
</script>

<style scoped></style>
