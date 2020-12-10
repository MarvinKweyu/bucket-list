import axiosAuth from '../../axios-auth'
import router from '../../router'

const state = {
  idToken: null,
  userId: null,
  user: null,
  errorResetMessage: null
}

const mutations = {
  STORE_USER (state, user) {
    state.user = user
  },
  AUTH_USER (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  CLEAR_AUTH_DATA (state) {
    state.idToken = null
    state.userId = null
  },
  EMAIL_NOT_FOUND (state, errorMessage) {
    state.errorResetMessage = errorMessage
  }
}

const actions = {
  setLogoutTimer ({ commit }, expirationTime) {
    // logout after 3600 seconds i.e 1 hr
    setTimeout(() => {
      commit('CLEAR_AUTH_DATA')
      router.replace('/')
    }, expirationTime * 1000)
  },
  signUp ({ commit, dispatch }, authData) {
    axiosAuth
      .post('accounts:signUp?key=AIzaSyC7rKqPtZhHD8g3U0ObI-XwqQsFDgKIxuM', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('AUTH_USER', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expiresIn', expirationDate)
        dispatch('setLogoutTimer', res.data.expiresIn)
      })
      .catch(error => console.log(error))
  },

  login ({ commit, dispatch }, authData) {
    axiosAuth
      .post('accounts:signInWithPassword?key=AIzaSyC7rKqPtZhHD8g3U0ObI-XwqQsFDgKIxuM', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('AUTH_USER', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expiresIn', expirationDate)
        // // save email locally for use in login
        localStorage.setItem('email', authData.email)
        dispatch('setLogoutTimer', res.data.expiresIn)
      })
      .catch(error => console.log(error))
  },
  tryAutoLogin ({ commit }) {
    const token = localStorage.getItem('token')
    // check if token is present
    if (!token) {
      return
    }
    const expirationDate = localStorage.getItem('expiresIn')
    const now = new Date()

    if (now >= expirationDate) {
      return
    }

    const userId = localStorage.getItem('userId')
    commit('AUTH_USER', {
      token: token,
      userId: userId
    })
    router.push({ name: 'Home' })
  },
  logout ({ commit }) {
    commit('CLEAR_AUTH_DATA')
    router.push({ name: 'Login' })
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
  },
  resetPassword ({ commit, dispatch }, resetDetails) {
    commit('EMAIL_NOT_FOUND', resetDetails.errorResetMessage)
    axiosAuth.post('accounts:sendOobCode?key=AIzaSyC7rKqPtZhHD8g3U0ObI-XwqQsFDgKIxuM', {
      email: resetDetails.email,
      requestType: 'PASSWORD_RESET'
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        commit('EMAIL_NOT_FOUND', error)
      })
  }
}

const getters = {
  isAuthenticated (state) {
    return state.idToken !== null
  },
  resetError (state) {
    return state.errorResetMessage
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
