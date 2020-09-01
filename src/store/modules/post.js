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
        // console.log(res.data)
        // console.log(Object.values(res.data))
        commit('SET_PROJECTS', Object.values(res.data))
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProjectDetail ({ commit, state }, projectId) {
    // const allProjects = state.allProjects
    //
    // const specificDetail = allProjects[projectId]

    // eslint-disable-next-line no-undef
    // console.log(stringSimilarity.compareTwoStrings('healed', 'sealed'))
    commit('SET_PROJECT_DETAIL', projectId)
  }

}

const getters = {
  getProjectDetail: state => {
    return state.projectDetail
  },
  getAllProjects: state => {
    return state.allProjects.filter(project => project.projectTitle !== '')
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
