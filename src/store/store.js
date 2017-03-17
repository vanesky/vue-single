import Vue from 'vue'
import Vuex from 'vuex'

import m1 from './modules/modules1'
import m2 from './modules/modules2'
Vue.use(Vuex)

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中

export default new Vuex.Store({
  /*actions,
  getters,*/
  modules: {
    a:m1,
    b:m2
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
