import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token: localStorage ? localStorage.getItem('user-token') : '',
        status: '',
    },

    getters:{
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status
    },

    actions: {
        [AUTH_REQUEST]: ({state, commit, dispatch}, user) => {
            return new Promise((resolve, reject) => {
              commit(AUTH_REQUEST)
              fetch('http://localhost:3000/login/api/register', {
                  body: JSON.stringify(user),
                  method: 'POST'
                })
              .then(resp => {
                  const token = resp.data.token
                  localStorage.setItem('user-token', state.token)
                  commit(AUTH_SUCCESS, token)
                  dispatch(USER_REQUEST)
                  resolve(resp)
              })
              .catch(err => {
                  commit(AUTH_ERROR, err)
                  localStorage.removeItem('user-token')
                  reject(err)
              })  
            })
        },

        [AUTH_LOGOUT]: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
                commit(AUTH_LOGOUT)
                localStorage.removeItem('user-token')
                resolve()
            })
        }
    },

    mutations: {
        [AUTH_REQUEST]: (state) => {
            state.status = 'loading'
        },
        [AUTH_SUCCESS]: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        [AUTH_ERROR]: (state) => {
            state.status = 'error'
        }
    }
})