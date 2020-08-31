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
  getProjectDetail ({ commit, state }, projectId) {
    const allProjects = state.allProjects

    const specificDetail = allProjects[projectId]
    console.log(specificDetail)

    // eslint-disable-next-line no-undef
    // console.log(stringSimilarity.compareTwoStrings('healed', 'sealed'))
    commit('SET_PROJECT_DETAIL', specificDetail)
  }

}

const getters = {
  getProjectDetail: state => {
    return state.projectDetail
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
