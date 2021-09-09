import Vue from 'vue'
import Vuex from 'vuex'
import basket from './modules/basket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basket,
  }
})
