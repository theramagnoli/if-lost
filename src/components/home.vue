<template>
  <div>
    <div>
      <h1 class="green">Bienvenido a </h1> 
      <img src="images\logonegro.png" alt="if lost" class="logo">
      <h2>Crea una cuenta para comenzar</h2>
    </div>

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
      <h2>
        ¿Ya tienes una cuenta?
        <a v-on:click="iniciarSesión++" id="botonInicio" href="#">Inicia sesión</a>
      </h2>
    </div>

    <!-- ESTA SECCIÓN SOLO SE MOSTRARA CUANDO SE DE CLICK EN INCIAR SESIÓN -->
    <form id="iniciarSesión" v-if="iniciarSesión == 1">
      <div>
        <input type="email" name="correo" placeholder="Correo electrónico" />
      </div>

      <div>
        <input type="password" name="contraseña" placeholder="Contraseña" />
      </div>

      <button type="submit" id="entrar">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iniciarSesión: 0,
    };
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped></style>
