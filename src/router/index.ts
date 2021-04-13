import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        meta: {
            title: '网站主页',
            icon: 'el-icon-data-line'
        },
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '网站主页',
                    icon: 'el-icon-data-line'
                },
                component: () => import('@/views/home.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
