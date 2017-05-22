import _ from 'lodash'
import moment from 'moment'
//
import Vue from 'vue'
import indexVue from './index.vue'
import './index.less'
import './content.less'
import ivideoasset from './video.mp4'

/*<video poster="//media.html5media.info/poster.jpg" controls="" preload="">
      <source src="//media.html5media.info/video.mp4">
  </video>*/

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ') + '<br>Time:' + moment().format('YYYY/MM/DD,h:mm:ss')
    let ivideo = document.createElement('video')
    ivideo.setAttribute('controls', '')
    let isource = document.createElement('source')
    isource.setAttribute('src', ivideoasset)
    ivideo.appendChild(isource)
    element.appendChild(ivideo)
    return element
}

document.body.appendChild(component())

let vueRootDom = document.createElement('div')
vueRootDom.setAttribute('id', 'app')
document.body.appendChild(vueRootDom)


let VMRoot = new Vue({
    el: '#app',
    template: '<index-Vue/>',
    components: {
        indexVue
    }
})