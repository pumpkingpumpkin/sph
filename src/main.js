import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import TypeNav from '@/components/TypeNav'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import * as API from '@/api'
import {Loading, MessageBox} from 'element-ui'

Vue.component(TypeNav.name,TypeNav) //全局组件
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.config.productionTip = false
import {reqCategoryList} from '@/api'
reqCategoryList()
import VueLazyload from 'vue-lazyload'
import hshwk from '@/assets/images/hshwk.gif'
import myPlugins from '@/plugins/myPlugins'
Vue.use(myPlugins,{name:'upper'})
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
    Vue.use(VueLazyload,{
      loading:hshwk
    })
  },
  router,
  store
}).$mount('#app')
