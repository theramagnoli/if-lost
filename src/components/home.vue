<template>
  <img src="images\logonegro.png" alt="if lost" class="logo" />
  <div v-if="iniciarSesión == 0">
    <div>
      <h1 class="vertical-center">Bienvenido</h1>
    </div>
     <h2>Crea una cuenta para comenzar</h2>

    <form id="crearCuenta">
      <div>
        <input type="email" name="correo" placeholder="Correo electrónico" />
      </div>

      <div>
        <input type="password" name="contraseña" placeholder="Contraseña" />
      </div>

      <button type="submit">Crear cuenta</button>
    </form>

    <div>
      <h3>
        ¿Ya tienes una cuenta?
        <a v-on:click="iniciarSesión = 1" id="botonInicio" href="#"
          >Inicia sesión</a
        >
      </h3>
    </div>
  </div>

  <!-- sección de inicio de sesión -->
  <div v-if="iniciarSesión == 1">
    <div>
      <h1 class="vertical-center">Bienvenido de nuevo</h1>
    </div>
     <h2>Nos alegra verte otra vez</h2>

    <form id="iniciarSesión">
      <div>
        <input type="email" name="correo" placeholder="Correo electrónico" />
      </div>

      <div>
        <input type="password" name="contraseña" placeholder="Contraseña" />
      </div>

      <button type="submit" id="entrar">Entrar</button>
    </form>

    <div>
      <h3>
        ¿Aún no tienes cuenta?
        <a v-on:click="iniciarSesión = 0" id="botonCrearCuenta" href="#"
          >Crear una</a
        >
      </h3>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

export default {
  data() {
    return {
      iniciarSesión: 0,
    };
  },
  mounted() {
    const auth = getAuth(app);

    //crear cuentas
    const formCrearCuenta = document.querySelector("#crearCuenta");
    formCrearCuenta.addEventListener("submit", (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(
        auth,
        formCrearCuenta.correo.value,
        formCrearCuenta.contraseña.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    //iniciar sesión
    const botonInicarSesion = document.querySelector('#botonInicio');
    botonInicarSesion.addEventListener('click', function(e){
      const formIniciarSesion = document.querySelector("#iniciarSesión");
      formIniciarSesion.addEventListener("submit", (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
          auth,
          formIniciarSesion.correo.value,
          formIniciarSesion.contraseña.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });

    
    // obtener más información
    const botonEntrar = document.querySelector('#entrar');
    botonEntrar.addEventListener('submit', function(e){
      updateProfile(auth.currentUser, {
        displayName: "Sergio Ramagnoli",
        photoURL: "https://i.pinimg.com/474x/5b/26/14/5b261453f19c9badc3fc053a200eb4b2.jpg"
      }).then((userCredential) => {
        console.log(userCredential.user)
      }).catch((error) => {
        console.log(error.message)
      });
    });
    })
  },
  computed: {},
};
</script>

<style scoped></style>
