import globalAxios from 'axios'

const state = {
  allProjects: null,
  projectDetail: null
}

const mutations = {
  SET_PROJECTS (state, allProjects) {
    state.allProjects = allProjects
  },
  SET_PROJECT_DETAIL (state, projectDetail) {
    state.projectDetail = projectDetail
  }

}

const actions = {
  createProject ({ commit }, postInfo) {
    globalAxios.post('/posts/posts.json', postInfo)
      .then(
        res => {
          console.log(res)
        })
      .catch(error => {
        console.log(error)
      })
  },
  getAllProjects ({ commit }) {
    globalAxios.get('/posts/posts.json')
      .then(res => {
        console.log(res.data)
        commit('SET_PROJECTS', res.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProjectDetail ({ commit }, projectTitle) {
    globalAxios.get('/posts/posts.json', projectTitle)
      .then(res => {
        console.log('post detail, ', res.data)
        commit('SET_PROJECT_DETAIL', res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
