<template>
  <div id="agendarViaje">
    <div>
      <h1 class="green">AGENDAR VIAJE</h1>
      <h2>Indícanos los detalles de tu viaje para mantenerte seguro</h2>
    </div>
    <form v-on:submit.prevent>
      <!-- agregar detalles de por qué se requiere la información en cada campo -->
      <div>
        <p>¿A dónde vas? Entre más detallada la dirección, mejor.</p>
        <input type="text" id="destinoCV" v-model="destinoCV" />
        <button id="buscarDestino" v-on:click.prevent>Buscar lugar</button>
      </div>

      <!-- MAPA, LO QUE SE PONGA EN LUGA DEBE APARACER AQUÍ -->
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="500"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=monterrey&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://putlocker-is.org"></a><br />
          ><a href="https://www.embedgooglemap.net">embed map</a>
        </div>
      </div>

      <div>
        <p>¿No se reconoce el lugar? ¿O quieres agregar algún detalle?</p>
        <textarea id="infoExtraDestino" v-model="infoExtraDestino"></textarea>
      </div>

      <div>
        <p>¿A qué hora planeas ir?</p>
        <input type="time" id="horaCV" v-model="horaCV" />
      </div>

      <div>
        <p>¿Cuánto planeas tardar?</p>
        <input type="number" id="demoraCV" v-model="demoraCV" />
        <select id="horOMin">
          <option value="horas">horas</option>
          <option value="minutos">minutos</option>
        </select>
      </div>

      <div>
        <p>Quizá quieras decirnos cómo irás vestido. O no, es tu decisión.</p>
        <textarea id="vestimentaCV" v-model="vestimentaCV" />
      </div>

      <button type="submit" id="crearCuenta">AGENDAR VIAJE</button>
    </form>
  </div>

  <div id="confirmarViaje">
    <h1 class="green">CONFIRMAR VIAJE</h1>
    <h2>
      Asegúrate que todos los detalles de tu viaje se muestren de manera
      correcta
    </h2>

    <h4>Lugar al que vas</h4>
    <p>{{ destinoCV }} <a>(ver en mapa)</a></p>

    <h4>Detalles adicionales</h4>
    <p v-if="infoExtraDestino.value">{{ infoExtraDestino }}</p>
    <p v-else>No se agregaron detalles</p>

    <h4>Hora de salida</h4>
    <p>{{ horaCV }}</p>

    <h4>Tiempo que tardarás</h4>
    <p>{{ demoraCV }} {{ HorOMin }}</p>

    <h4>Detalles de vestimenta</h4>
    <p v-if="vestimentaCV.value">{{ vestimentaCV }}</p>
    <p v-else>No se agregaron detalles</p>

    <button>CONFIRMAR VIAJE</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinoCV: "",
      infoExtraDestino: "",
      horaCV: "",
      demoraCV: "",
      HorOMin: "",
      vestimentaCV: "",
    };
  },
  mounted() {
    //buscar locacion en el mapa
    let destinoCV = document.querySelector("#destinoCV");

    const buscarDestino = document.querySelector("#buscarDestino");
    buscarDestino.addEventListener("click", function () {
      let destino = destinoCV.value;
      let newsrc =
        "https://maps.google.com/maps?q=" +
        destino +
        "&t=&z=13&ie=UTF8&iwloc=&output=embed";
      let map = document.querySelector("#gmap_canvas");
      map.setAttribute("src", newsrc);
    });
  },
  computed: {
    mantenerInfoActualizada(){
      this.destinoCV = document.querySelector('#destinoCV').value,
      this.infoExtraDestino = document.querySelector('#infoExtraDestino').value,
      this.horaCV  = document.querySelector('#horaCV').value,
      this.demoraCV  = document.querySelector('#demoraCV').value,
      this.vestimentaCV  = document.querySelector('#vestimentaCV').value
    },
  },
};
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 500px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 500px;
}
</style>
