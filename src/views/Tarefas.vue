<template>
           <FormularioHome @aoSalvarTarefa="salvarTarefa"/>
           <div class="Lista">
              <TarefaForm v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
              <BoxTarefa v-if="listaVazia">
                 Você näo está muito produtivo hoje :(
              </BoxTarefa>
           </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FormularioHome from '../components/FormularioHome.vue';
  import TarefaForm from '../components/TarefaForm.vue';
  import ITarefas from '../interfaces/ITarefa';
  import BoxTarefa from '../components/BoxTarefa.vue';
  
  
  export default defineComponent({
    name: 'App',
    components: 
  { 
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
  
  </style>
  