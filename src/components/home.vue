<template>
  <img src="images\logonegro.png" alt="if lost" class="logo" />
  <div v-if="iniciarSesión == 0 && obtenerInfo == 0">
    <h1 class="vertical-center">Bienvenido</h1>
    <h2>Crea una cuenta para comenzar</h2>

    <form id="crearCuenta" v-on:submit="obtenerInfo = 1">
      <input type="email" name="correo" placeholder="Tu correo electrónico" />
      <input type="password" name="contraseña" placeholder="Una buena contraseña" />
      <button type="submit">Crear mi cuenta</button>
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

  <div v-if="obtenerInfo == 1">
    <h1>Ayúdanos a ayudarte</h1>
    <h2>Queremos conocerte mejor</h2>
    <form id="informaciónPersonal"  v-on:submit="obtenerInfo = 2">
      <input type="text" name="nombres" placeholder="Tu nombre(s)" />
      <input type="text" name="apellidos" placeholder="Tu apellido(s)" />
      <input type="tel" name="numero" placeholder="Tu número de teléfono" />
      <input type="text" name="ciudad" placeholder="Ciudad donde vives">
      <button type="submit">Continuar</button>
    </form>
  </div>

  <div v-if="obtenerInfo == 2">
    <h1>A ver tu cara, mijo</h1>
    <h2>Una foto puede ayudar a reconocerte, procura que sea clara y sin filtros</h2>

    <div>
      <img src="images\perfildef.webp" alt="perfil" class="subir-perfil" />
    </div>

    <form id="fotoPerfil">
      <input type="file" name="foto" accept="image/png, image/jpeg, image/jpg"/>
      <button type="submit">Subir mi foto</button>
      <button>Omitir</button>
    </form>
  </div>

  <!-- sección de inicio de sesión -->
  <div v-if="iniciarSesión == 1">
    <div>
      <h1 class="vertical-center">Bienvenido de nuevo</h1>
    </div>
    <h2>Nos alegra verte otra vez</h2>

    <form id="iniciarSesión">
        <input type="email" name="correo" placeholder="Correo electrónico" />
        <input type="password" name="contraseña" placeholder="Contraseña" />
      <button type="submit" id="entrar">Entrar a mi cuenta</button>
    </form>

    <div>
      <h3>
        ¿Aún no tienes cuenta?
        <a v-on:click="iniciarSesión = 0" id="botonCrearCuenta" href="#"
          >Crea una</a
        >
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iniciarSesión: 0,
      obtenerInfo: 0,
    };
  },
  mounted() {
  },
  computed: {
    perfilActualizado(){
      let perfil = document.querySelector("#fotoPerfil");
      let fotoPerfil = perfil.foto;
      if(fotoPerfil.value){
        console.log("perfil")
      }
    },
  },
};
</script>

<style scoped>
.subir-perfil {
  width: 200px;
  margin: auto;
  display: block;
  border-radius: 50%;
}
</style>
