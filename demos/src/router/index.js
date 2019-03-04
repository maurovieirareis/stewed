import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import color from '../pages/color.vue'
import demos from '../pages/demos.vue'
import { store } from '../store/store';

Vue.use(Router)

const routes = [];
routes.push({
    path: '/',
    name: 'home',
    component: home
});

routes.push({
    path: '/colors',
    name: 'color',
    component: color
});

store.state.menus.map(menu => {
    menu.data.map(link => {
        if (link.demo) {
            routes.push({
                path: '/' + link.url,
                name: link.title,
                component: demos
            })
        }
    })
});

export default new Router({
    routes
})

