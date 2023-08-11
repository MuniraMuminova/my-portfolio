import { createRouter, createWebHashHistory} from "vue-router";

import Home from '../pages/Home.vue'


export const routers = createRouter({
    history: createWebHashHistory(),
    routes:[
      {path:'/', name:'home', component: Home},
      {path:'/about', name:'about', component: () => import('../pages/Aboute.vue')},
      {path:'/skill', name:'skill', component: () => import('../pages/Skills.vue')},
      {path:'/project', name:'project', component: () => import('../pages/Projects.vue')},
      {path:'/contact', name:'contect', component: () => import('../pages/Contacts.vue')},
    ]
})