import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",
    authDomain: "if-lost-159f6.firebaseapp.com",
    projectId: "if-lost-159f6",
    storageBucket: "if-lost-159f6.appspot.com",
    messagingSenderId: "55254413607",
    appId: "1:55254413607:web:2b14450ddb1a97bdccb902"
  };

const app = initializeApp(firebaseConfig);

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