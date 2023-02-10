<template>
    <BoxTarefa>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descricao'}}
            </div>

            <div class="column">
                <CronometroFormulario :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </BoxTarefa>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import CronometroFormulario from './CronometroFormulario.vue';
import ITarefas from '../interfaces/ITarefa'
import BoxTarefa from '../components/BoxTarefa.vue'

export default defineComponent({
    name: "TarefaForm",
    components: {
        CronometroFormulario,
        BoxTarefa
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

</style>