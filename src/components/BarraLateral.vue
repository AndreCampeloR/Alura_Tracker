<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <div>
          <button class="button" @click="alterarTema">
            {{textoBotao}}
          </button>
        </div>
        <nav class="panel mt-5">
          <ul>
              <li>
                 <router-link to="/" class="link">
                  <span class="material-symbols-outlined">
                    list
                  </span>
                   <p>Tarefas</p>
                 </router-link>
              </li>
              <li>
                 <router-link to="/projetos" class="link">
                  <span class="material-symbols-outlined">
                    account_tree
                  </span>
                   <p>Projetos</p>
                 </router-link>
              </li>
          </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data(){
      return{
        modoEscuroAtivado: false
      }
    },
    computed: {
      textoBotao(){
        if(this.modoEscuroAtivado){
          return 'Desativar modo escuro'
        }
        return 'Ativar modo escuro'
      }
    },
    methods: {
      alterarTema() {
        this.modoEscuroAtivado = !this.modoEscuroAtivado
        this.$emit('aoTemaAlterado', this.modoEscuroAtivado)
      }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
  display: flex;
  flex-direction: row;
}
.link {
  color: #fff;
}
.link:hover {
  color: #FAF0CA;
}
.link.router-link-active {
  color: #FAF0CA;
}
</style>