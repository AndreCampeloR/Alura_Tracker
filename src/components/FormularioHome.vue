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
        <TemporizadorFormulario/>
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
  }
});
</script>

<style scoped>
</style>