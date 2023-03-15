import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"


const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: 
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default router;