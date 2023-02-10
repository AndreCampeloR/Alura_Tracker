<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao}}
            </div>

            <div class="column">
                <CronometroFormulario :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import CronometroFormulario from './CronometroFormulario.vue';
import ITarefas from '../interfaces/ITarefa'

export default defineComponent({
    name: "TarefaForm",
    components: {
        CronometroFormulario
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefas>,
            required: true
        }
    }
})
</script>

<style scoped>
.box 
{
    background-color: #FAF0CA;
}
</style>