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
          v-model="descricao"
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
        descricao: ''
    }
  },
  components: {
    TemporizadorFormulario
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number) : void{
            console.log('tempo de tarefa', tempoDecorrido)
            console.log('descriçäo da tarefa', this.descricao)
            this.descricao = ''
    }
  }
});
</script>

<style scoped>
</style>