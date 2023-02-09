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
        <TemporizadorFormulario @ao-temporizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorFormulario from "./TemporizadorFormulario.vue";

export default defineComponent({
  name: "FormularioHome",
  data() {
    return{
        tempoEmSegundos: 0,
        cronometro: 0
    }
  },
  components: {
    TemporizadorFormulario
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number) : void{
            console.log('tempo de tarefa', tempoDecorrido)
    }
  }
});
</script>

<style scoped>
</style>