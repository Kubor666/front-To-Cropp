import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
    },
    
    state:{
        showModal: false
    },
    mutations: {
        toggleModal (state){
            state.showModal = !state.showModal
        }
    },
    getters: {
        showModal: state => {
            return state.showModal
        }
    }
})