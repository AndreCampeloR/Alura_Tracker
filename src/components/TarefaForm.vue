<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descriçäo da tarefa
            </div>

            <div class="column">
                <CronometroFormulario :tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CronometroFormulario from './CronometroFormulario.vue';

export default defineComponent({
    name: "TarefaForm",
    components: {
        CronometroFormulario
    }
})
</script>

<style scoped>
.box 
{
    background-color: #FAF0CA;
}
</style>