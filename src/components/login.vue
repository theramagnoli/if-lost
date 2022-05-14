// Que la cuenta no se cree hasta el momento en que se completa el último paso,
// para así evitar que haya cuentas sin nombre o por el estílo
<template>
  <div v-if="iniciar_sesión == false && paso == 0">
    <div>
      <h1 class="ttl-1">Bienvenido</h1>
      <div>
        <h3 class="subttl">Crea una cuenta para comenzar</h3>
      </div>
    </div>

    <form id="crearCuenta" v-on:submit.prevent="paso = 1" class="mt-8">
      <input
        class="inp"
        type="email"
        v-model="correo_cc"
        placeholder="Tu correo electrónico"
      />
      <input
        class="inp mt-4"
        type="password"
        v-model="contraseña_cc"
        placeholder="Una buena contraseña"
      />
      <button type="submit" class="btn-blue">Crear mi cuenta</button>
    </form>
    <div class="mt-4 grid">
      <h3 class="subttl">¿Ya tienes una cuenta?</h3>
      <div class="place-self-center">
        <a
          v-on:click="iniciar_sesión = true"
          id="botonInicio"
          href="#"
          class="font-semibold underline"
          >Inicia sesión</a
        >
      </div>
    </div>
  </div>

  <div v-if="paso == 1">
    <h1 class="ttl-1">Ayúdanos a ayudarte</h1>
    <h3 class="subttl">Queremos conocerte mejor</h3>
    <form id="informaciónPersonal" v-on:submit.prevent="paso = 2" class="mt-8">
      <input
        type="text"
        placeholder="Tu nombre(s)"
        v-model="nombre_cc"
        class="inp"
      />
      <input
        type="text"
        placeholder="Tu apellido(s)"
        v-model="apellidos_cc"
        class="inp mt-4"
      />
      <input
        type="number"
        placeholder="Tu número de teléfono, a 10 dígitos"
        v-model="numero_cc"
        class="inp mt-4"
      />
      <input
        type="text"
        placeholder="Ciudad donde vives"
        v-model="ciudad_cc"
        class="inp mt-4"
      />
      <button type="submit" class="btn-blue">Continuar</button>
    </form>
  </div>
  <div v-if="paso == 2">
    <h1 class="ttl-1">¿A quién quieres llegar?</h1>
    <h3 class="subttl">
      A este contacto enviaremos tu información en caso de que te pase algo
    </h3>
    <form v-on:submit.prevent="(paso = 3), crearCuenta()" class="mt-8">
      <input
        type="cel"
        placeholder="Número telefónico de 10 dígitos"
        v-model="numero_contacto"
        class="inp"
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        v-model="correo_contacto"
        class="inp mt-4"
        required
      />
      <input
        type="text"
        placeholder="Nombre de la persona (opcional)"
        class="inp mt-4"
        v-model="nombre_contacto"
      />
      <button type="submit" class="btn-blue">Actualizar información</button>
    </form>
  </div>
  <div v-if="paso == 3">
    <h1 class="ttl-1">Sube una foto de perfil</h1>
    <h3 class="subttl">Intenta que se vea claramente tu rostro</h3>
    <form v-on:submit.prevent ref="subirperfil">
      <div class="grid mt-8">
        <div class="place-self-center grid">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media"
            alt="perfil"
            ref="perfil"
            width="200"
            class="rounded-full aspect-square object-cover border-4"
          />
          <label type="input" for="perfil" class="btn-gray text-center">
            Subir imagen
          </label>
          <input
            id="perfil"
            type="file"
            accept=".jpg, .jpeg, .png"
            v-on:change="subirPerfil($event)"
            class="hidden"
            required
          />
        </div>
        <button type="submit" class="btn-blue hidden" ref="subir">
          Actualizar mi perfil
        </button>
        <button type="button" class="btn-gray" ref="omitir">Omitir</button>
      </div>
    </form>
  </div>
  <div v-if="paso == 4">
    <h1 class="ttl-1">Listo</h1>
    <h3 class="subttl">Configuramos tu cuenta exitosamente</h3>
    <button class="btn-gray" v-on:click="obtenerUsuario()">Ir a inicio</button>
  </div>
  <div v-if="iniciar_sesión == true">
    <h1 class="ttl-1">Bienvenido</h1>
    <h3 class="subttl">Nos alegra verte otra vez</h3>
    <form v-on:submit.prevent="iniciarSesión()" class="mt-8">
      <input
        class="inp"
        type="email"
        placeholder="Tu correo electrónico"
        v-model="correo_is"
      />
      <input
        class="inp mt-4"
        type="password"
        placeholder="Tu contraseña"
        v-model="contraseña_is"
      />
      <button type="submit" id="entrar" class="btn-blue">
        Entrar a mi cuenta
      </button>
    </form>
    <div class="mt-4 grid">
      <h3 class="subttl">¿Aún no tienes cuenta?</h3>
      <div class="place-self-center">
        <a
          class="font-semibold underline"
          v-on:click="iniciar_sesión = false"
          id="botonCrearCuenta"
          href="#"
          >Crea una</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  auth,
  database,
  storage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  doc,
  setDoc,
  updateDoc,
  ref,
  uploadBytes,
} from "/js/firebase.js";

export default {
  data() {
    return {
      correo_is: "",
      contraseña_is: "",
      correo_cc: "",
      contraseña_cc: "",
      nombre_cc: "",
      apellidos_cc: "",
      numero_cc: "",
      ciudad_cc: "",
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
      await createUserWithEmailAndPassword(
        auth,
        this.correo_cc,
        this.contraseña_cc
      )
        .then((user) => {
          console.log(user.user);
        })
        .catch((error) => {});
      updateProfile(auth.currentUser, {
        displayName: this.nombre_cc + " " + this.apellidos_cc,
      })
        .then(() => {})
        .catch((error) => {});
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid;
          setDoc(doc(database, "infoUsuarios", user.uid), {
            numero: this.numero_cc,
            nombres: this.nombre_cc,
            apellidos: this.apellidos_cc,
            ciudad: this.ciudad_cc,
            descripcion: "",
          });
        }
      });
      onAuthStateChanged(auth, (user) => {
        if (user) {
          updateDoc(doc(database, "infoUsuarios", user.uid), {
            numero_contacto: this.numero_contacto,
            nombre_contacto: this.nombre_contacto,
            correo_contacto: this.correo_contacto,
          });
          this.paso = 3;
        }
      });
    },
    iniciarSesión() {
      signInWithEmailAndPassword(auth, this.correo_is, this.contraseña_is)
        .then((user) => {
          this.$router.push("/");
        })
        .catch((error) => {});
    },
    subirPerfil(img) {
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
          that.$refs.perfil.src = src_encoded;
          let omitir = that.$refs.omitir;
          omitir.innerHTML = "Descartar cambios y continuar";
          that.$refs.subir.classList.remove("hidden");
          let subir = that.$refs.subirperfil;
          subir.addEventListener("submit", function (e) {
            that.img = dataURLtoFile(src_encoded, "perfil.png");
            const storeref = ref(storage, "perfiles/" + that.uid);
            uploadBytes(storeref, that.img).then((snapshot) => {
              that.paso++;
            });
          });
          omitir.addEventListener("click", function (e) {
            that.paso++;
          });
        };
      };
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
