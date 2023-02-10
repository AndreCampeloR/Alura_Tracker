<template>
  <main class="columns is-gapless is-multiline modo-escuro">
      <div class="column is-one-quarter">
         <BarraLateral/>
      </div>

      <div class="column is-three-quarter conteudo">
         <FormularioHome @aoSalvarTarefa="salvarTarefa"/>
         <div class="Lista">
            <TarefaForm v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
            <BoxTarefa v-if="listaVazia">
               Você näo está muito produtivo hoje :(
            </BoxTarefa>
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
import BoxTarefa from './components/BoxTarefa.vue';


export default defineComponent({
  name: 'App',
  components: 
{ 
  BarraLateral,
  FormularioHome,
  TarefaForm,
  BoxTarefa
},
data()
{
  return{
    tarefas: [] as ITarefas[]
  }
},
computed: {
    listaVazia() : boolean {
      return this.tarefas.length === 0
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
main
{
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro
{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo
{
  background-color: var(--bg-primario);
}
</style>
