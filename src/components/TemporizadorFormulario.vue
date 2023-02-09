<template>
    <div
    class="is-flex is-align-items-center is-justify-content-space-between"
  >
    <CronometroFormulario :tempoEmSegundos="tempoEmSegundos"/>
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="material-symbols-outlined"> play_arrow </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="material-symbols-outlined"> stop </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroFormulario from "./CronometroFormulario.vue";

export default defineComponent({
  name: "TemporizadorFormulario",
  emits: ['aoTemporizadorFinalizado'],
  data() {
    return{
        tempoEmSegundos: 0,
        cronometro: 0,
        cronometroRodando: false
    }
  },
  components: {
    CronometroFormulario
  },
  methods: {
    iniciar() {
       this.cronometroRodando = true
       this.cronometro = setInterval(() => {
            this.tempoEmSegundos += 1
        }, 1000)
    },
    finalizar() {
        this.cronometroRodando = false
        clearInterval(this.cronometro)
        this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
        this.tempoEmSegundos = 0
    }
  }
});
</script>