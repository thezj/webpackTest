import VUERouter from 'vue-router'
//框架组件
import APPFrame from './vueComponents/index.vue'
//框架中的组件
import firstPage from './vueComponents/pages/firstPage.vue'

export default new VUERouter({
    routes: [{
        path: '/',
        component: APPFrame,
        children: [{
                path: '',
                component: firstPage
            },
            {
                path: 'firstPage',
                component: firstPage
            }
        ]
    }]
})