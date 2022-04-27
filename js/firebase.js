import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",
  authDomain: "if-lost-159f6.firebaseapp.com",
  projectId: "if-lost-159f6",
  storageBucket: "if-lost-159f6.appspot.com",
  messagingSenderId: "55254413607",
  appId: "1:55254413607:web:2b14450ddb1a97bdccb902"
};


initializeApp(firebaseConfig);

const auth = getAuth();
const  database = getFirestore();

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

  // obtener info personal (nombre, etc.)
  const formActualizarInfo = document.querySelector('#informaciónPersonal');
  formActualizarInfo.addEventListener('submit', function(e){
    e.preventDefault();
    let nombre = formActualizarInfo.nombres.value + " " + formActualizarInfo.apellidos.value;
    let numero = formActualizarInfo.numero.value;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDoc(doc(database, "infoUsuarios", user.uid), {
          numero: formActualizarInfo.numero.value,
          nombres: formActualizarInfo.nombres.value,
          apellidos: formActualizarInfo.apellidos.value,
          ciudad: formActualizarInfo.ciudad.value
        });
      }
      else {
        console.log("error")
      }
    });

    updateProfile(auth.currentUser, {
      displayName: nombre,
      phoneNumber: numero,
    }).then(() => {
      console.log("perfil actualizado")
    }).catch((error) => {
      console.log(error.message)
    });
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
})

//FIRESTORE

// Add a new document in collection "cities"
