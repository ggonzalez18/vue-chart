import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/chartline',
        name: 'ChartLine',
        component: () =>
            import ( /* webpackChunkName: "ChartLine" */ '../views/ChartLine.vue')
    },
    {
        path: '/chartcircle',
        name: 'ChartCircle',
        component: () =>
            import ( /* webpackChunkName: "ChartCircle" */ '../views/ChartCircle.vue')
    },
    {
        path: '/chartcolumn',
        name: 'ChartColumn',
        component: () =>
            import ( /* webpackChunkName: "ChartColumn" */ '../views/ChartColumn.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router