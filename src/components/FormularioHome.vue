<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criaçäo de uma nova tarefa"
      >
        <input
          type="text "
          class="input"
          placeholder="Qual tarefa você deseja inciar ?"
        />
      </div>

      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <CronometroFormulario :tempoEmSegundos="tempoEmSegundos"/>
          <button class="button" @click="iniciar()">
            <span class="material-symbols-outlined"> play_arrow </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
            <span class="material-symbols-outlined"> stop </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroFormulario from "./CronometroFormulario.vue";

export default defineComponent({
  name: "FormularioHome",
  data() {
    return{
        tempoEmSegundos: 0,
        cronometro: 0
    }
  },
  components: {
    CronometroFormulario
  },
  methods: {
    iniciar() {
       this.cronometro = setInterval(() => {
            this.tempoEmSegundos += 1
        }, 1000)
    },
    finalizar() {
        clearInterval(this.cronometro)
    }
  }
});
</script>

<style scoped>
</style>