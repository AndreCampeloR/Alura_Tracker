<template>
  <main class="columns is-gapless is-multiline">
      <div class="column is-one-quarter">
         <BarraLateral/>
      </div>

      <div class="column is-three-quarter">
         <FormularioHome @aoSalvarTarefa="salvarTarefa"/>
         <div class="Lista">
            <TarefaForm/>
            <TarefaForm/>
            <TarefaForm/>
            <TarefaForm/>
         </div>
      </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioHome from './components/FormularioHome.vue';
import TarefaForm from './components/TarefaForm.vue';
import ITarefas from './interfaces/ITarefa';


export default defineComponent({
  name: 'App',
  components: 
{ 
  BarraLateral,
  FormularioHome,
  TarefaForm
},
data()
{
  return{
    tarefas: [] as ITarefas[]
  }
},
methods: {
  salvarTarefa (tarefa: ITarefas)
  {
     this.tarefas.push(tarefa)
  }
}

});
</script>

<style>
.Lista
{
  padding: 1.25rem;
}
</style>
