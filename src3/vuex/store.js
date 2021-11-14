import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    sum:0,
  },
  mutations:{
    JIA(state,value){
      state.sum += value
    }
  },
  actions:{
    jia(context,value){
      context.commit("JIA",value)
    }
  },
  getters:{

  }
})
export default store
