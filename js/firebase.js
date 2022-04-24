import { initializeApp } from "firebase/app";

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