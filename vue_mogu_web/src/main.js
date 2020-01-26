// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
Vue.use(ElementUI, { locale })

import App from './App'
import router from './router'
import store from './store'

// 引入公共JS
import $ from 'jquery'
import easyfader from '../static/js/jquery.easyfader.min.js'
import scrollReveal from '../static/js/scrollReveal.js'
import common from '../static/js/common.js'
import "@/assets/iconfont/iconfont.css";
// import nav from '../static/js/nav.js'

Vue.config.productionTip = false

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //需要将store和vue实例进行关联，这里将其传递进去
  store,
  components: { App },
  template: '<App/>'
})
