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
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <strong>00:00:00</strong>
          </section>
          <button class="button">
            <span class="material-symbols-outlined"> play_arrow </span>
            <span>play</span>
          </button>
          <button class="button">
            <span class="material-symbols-outlined"> stop </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioHome",
});
</script>

<style scoped>
</style>