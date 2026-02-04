import  {createRouter, createWebHistory} from 'vue-router';
// importer les composants nécessaire 


const routes = [
    //{path: '/', name:'nom', component: Composant }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;