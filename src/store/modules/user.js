import axiosAuth from '../../axios-auth'

const state = {
  idToken: null,
  userId: null,
  user: null
}

const mutations = {
  STORE_USER (state, user) {
    state.user = user
  },
  AUTH_USER (state, userData) {
    state.idToken = userData.token
  }
}

const actions = {
  signup ({ commit }, authData) {
    axiosAuth
      .post('accounts:signUp?key=AIzaSyC7rKqPtZhHD8g3U0ObI-XwqQsFDgKIxuM', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('AUTH_USER', {
          token: res.data.key
        })
        localStorage.setItem('token', res.data.key)
        commit('STORE_USER', authData)
      })
      .catch(error => console.log(error))
  },

  login ({ commit }, authData) {
    axiosAuth
      .post('accounts:signInWithPassword?key=AIzaSyC7rKqPtZhHD8g3U0ObI-XwqQsFDgKIxuM', {
        email: authData.email,
        password: authData.password
      })
      .then(res => {
        commit('AUTH_USER', {
          token: res.data.key
        })
        // save token locally
        localStorage.setItem('token', res.data.key)
        // save email locally for use in login
        localStorage.setItem('email', authData.email)
      })
      .catch(error => console.log(error))
  },

  tryAutoLogin ({ commit }) {
    const token = localStorage.getItem('token')
    // check if token is present
    if (!token) {
      return
    }

    const userId = localStorage.getItem('userId')
    commit('AUTH_USER', {
      token: token,
      userId: userId
    })
  }
}

const getters = {
  isAuthenticated (state) {
    return state.idToken !== null
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
