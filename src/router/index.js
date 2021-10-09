import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    /**
     * 首页
     */
    {
        path: '/',
        name: 'Home',
        redirect: {
            name: 'DataBoardMain'
        }
    },

    /**
     * 相关
     * */
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/common/About.vue')
    },

    /**
     * 错误
     * */
    {
        path: '/error',
        name: 'Error',
        component: () => import('../views/common/Error.vue')
    },

    /**
     * 列表
     * */
    {
        path: '/university/list',
        name: 'UniversityList',
        component: () => import('../views/resource/university/UniversityList.vue')
    },
    {
        path: '/major/list',
        name: 'MajorList',
        component: () => import('../views/resource/major/MajorList.vue')
    },


    /**
     * 数据看板
     */
    {
        path: '/data/board/main',
        name: 'DataBoardMain',
        component: () => import('../views/dataBoard/main.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
