//==================引入主要模块==================
import VUE from 'vue'
import VUERouter from 'vue-router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//==================初始化一些模块==================
VUE.use(VUERouter)
VUE.use(elementUI)
//==================引入路由配置==================
import router from './router'
//添加vue挂载元素
document.write('<div id="app"><router-view></router-view></div>')
//创建和挂载VUE根实例
let app = new VUE({
    router
}).$mount('#app')