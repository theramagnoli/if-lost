<template class="scroll-smooth">
  <div>
    <h1 class="ttl-1">Bienvenido</h1>
    <div>
      <h3 class="subttl">Crea una cuenta para comenzar</h3>
    </div>
  </div>
  <form id="crearCuenta" v-on:submit.prevent="crearCuenta()" class="mt-5">
    <input
      class="inp"
      type="email"
      v-model="correo"
      placeholder="Tu correo electrónico"
    />
    <input
      class="inp mt-4"
      type="password"
      v-model="contraseña"
      placeholder="Una buena contraseña"
    />
    <input
      type="text"
      placeholder="Tu nombre(s)"
      v-model="nombre"
      class="inp mt-4"
    />
    <input
      type="text"
      placeholder="Tu apellido(s)"
      v-model="apellidos"
      class="inp mt-4"
    />
    <input
      type="number"
      placeholder="Tu número telefónico (10 dígitos)"
      v-model="numero"
      class="inp mt-4"
    />
    <input
      type="text"
      placeholder="Ciudad donde vives"
      v-model="ciudad"
      class="inp mt-4"
    />
    <h3 class="subttl py-5">
      Información de contacto, a este contancto enviarémos tus alertas
    </h3>
    <input
      type="text"
      placeholder="Nombre de la persona (opcional)"
      class="inp"
      v-model="nombre_contacto"
    />
    <input
      type="cel"
      placeholder="Número telefónico (10 dígitos)"
      v-model="numero_contacto"
      class="inp mt-4"
      required
    />
    <input
      type="email"
      placeholder="Correo electrónico"
      v-model="correo_contacto"
      class="inp mt-4"
      required
    />
    <button type="submit" class="btn-blue">Crear mi cuenta</button>
  </form>
  <div class="mt-4 grid">
    <h3 class="subttl">¿Ya tienes una cuenta?</h3>
    <div class="place-self-center">
      <button
        v-on:click="$router.push('/login')"
        id="botonInicio"
        class="font-semibold underline"
      >
        Inicia sesión
      </button>
    </div>
  </div>
</template>

<script>
import {
  auth,
  database,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  doc,
  setDoc,
} from "/js/firebase.js";

export default {
  data() {
    return {
      correo: "",
      contraseña: "",
      nombre: "",
      apellidos: "",
      numero: "",
      ciudad: "",
      numero_contacto: "",
      correo_contacto: "",
      nombre_contacto: "",
      iniciar_sesión: 1,
      paso: 0,
      img: "",
      uid: "",
    };
  },
  methods: {
    async crearCuenta() {
      await createUserWithEmailAndPassword(auth, this.correo, this.contraseña)
        .then(async (user) => {
          console.log(user.user);
          await updateProfile(auth.currentUser, {
            displayName: this.nombre + " " + this.apellidos,
          });
          await onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user);
              this.uid = user.uid;
              setDoc(doc(database, "infoUsuarios", user.uid), {
                numero: "+52" + this.numero,
                nombres: this.nombre,
                apellidos: this.apellidos,
                ciudad: this.ciudad,
                descripcion: "",
                numero_contacto: "+52" + this.numero_contacto,
                nombre_contacto: this.nombre_contacto,
                correo_contacto: this.correo_contacto,
              });
            }
          });
          Swal.fire({
            toast: true,
            position: "bottom",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 7000,
            timerProgressBar: true,
            icon: "success",
            title:
              "Creamos tu cuenta exitosamente, te invitamos a actualizar tu foto de perfil",
          });
          this.$router.push("/");
        })
        .catch((error) => {
          let mensaje;
          switch (error.code) {
            case "auth/email-already-in-use":
              mensaje =
                "El correo ha sido usado. Si ya tienes una cuenta, incia sesión";
              break;
            case "auth/invalid-email":
              mensaje = "Correo inválido. Ingresa un correo electrónico válido";
              break;
            case "auth/weak-password":
              mensaje =
                "Contraseña inválida. Las constraseñas deben tener por lo menos 6 caracteres";
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
