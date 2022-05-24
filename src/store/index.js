import { createStore } from "vuex";
import {
  database,
  auth,
  getDoc,
  doc,
  onAuthStateChanged,
  ref,
  storage,
  getDownloadURL,
  onSnapshot,
} from "/js/firebase.js";

export const store = createStore({
  state: {
    usuario: {
      id: "",
      nombre: "",
      ciudad: "",
      correo: "",
      tel: "",
      perfil: "",
      descripcion: "",
      clave: "",
      contacto: {
        nombre: "",
        correo: "",
        tel: "",
      },
      viaje: {
        destino: "",
        infodestino: "",
        salida: "",
        llegada: "",
        alerta: 0,
        img: "",
        infoimg: "",
        nota: "",
        mapa: "",
        clave: "",
      },
    },
  },
  mutations: {
    async obtenerUsuario(state) {
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          state.usuario.id = user.uid;
          state.usuario.nombre = user.displayName;
          state.usuario.correo = user.email;
          const refusuario = doc(database, "infoUsuarios", user.uid);
          const datos = await getDoc(refusuario);
          if (datos.exists()) {
            let info = datos.data();
            state.usuario.ciudad = info.ciudad;
            state.usuario.descripcion = info.descripcion;
            state.usuario.tel = info.numero;
            state.usuario.clave = info.viaje;
            state.usuario.contacto.correo = info.correo_contacto;
            state.usuario.contacto.nombre = info.nombre_contacto;
            state.usuario.contacto.tel = info.numero_contacto;
          }
          const refperfil = ref(storage, "perfiles/" + state.usuario.id);
          getDownloadURL(refperfil)
            .then((url) => {
              state.usuario.perfil = url;
            })
            .catch((error) => {
              state.usuario.perfil =
                "https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media&token=5a6ff639-cdc5-4372-a6c7-adc73e14fe47";
            });
          if (state.usuario.clave) {
            const alerta = onSnapshot(
              doc(database, "viajes", state.usuario.clave),
              (doc) => {
                let viaje = doc.data();
                if (viaje != null) {
                  state.usuario.viaje.destino = viaje.destino;
                  state.usuario.viaje.infodestino = viaje.infodestino;
                  state.usuario.viaje.salida = viaje.salida;
                  state.usuario.viaje.llegada = viaje.llegada;
                  state.usuario.viaje.alerta = viaje.alerta;
                  state.usuario.viaje.img = viaje.img;
                  state.usuario.viaje.infoimg = viaje.infoimg;
                  state.usuario.viaje.nota = viaje.nota;
                  state.usuario.viaje.mapa = viaje.mapa;
                  state.usuario.viaje.clave = viaje.clave;
                }
              }
            );
          }
        }
      });
    },
  },
  actions: {},
  getters: {
    usuario(state) {
      return state.usuario;
    },
  },
});

store.commit("obtenerUsuario");
