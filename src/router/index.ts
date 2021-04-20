import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
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
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'upload',
                name: 'upload',
                meta: {
                    title: '智能识别',
                    icon: 'el-icon-upload2'
                },
                component: () => import('@/views/identify.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
