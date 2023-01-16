import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    comida:[]
  },
  getters: {
  },
  mutations: {
    envioComida(state, payload){
      state.comida=payload
    }
  },
  actions: {
    async datosComida({commit}){
      const {data} = await axios.get('api.json')
      console.log(data)
      commit('envioComida',data)
    }
  },
  modules: {
  }
})
