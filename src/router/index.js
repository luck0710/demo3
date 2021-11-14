import Vue from 'vue'
import VueRouter from "vue-router"
import haha from '../pages/haha'
import xixi from '../pages/xixi'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:"/haha",
            component:haha
        },
        {
            path:"/xixi",
            component:xixi
        },

    ]
})

export default router