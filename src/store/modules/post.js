import globalAxios from 'axios'

const state = {
  allProjects: null,
  projectDetail: null,
  projectsObjectOfObjects: null
}

const mutations = {
  SET_PROJECTS (state, allProjects) {
    state.allProjects = allProjects
  },
  SET_PROJECT_DETAIL (state, projectDetail) {
    state.projectDetail = projectDetail
  },
  SET_PROJECTS_OBJECT (state, projectsObjectOfObjects) {
    state.projectsObjectOfObjects = projectsObjectOfObjects
  }

}

const actions = {
  createProject ({ commit }, postInfo) {
    const token = localStorage.getItem('token')
    globalAxios.post('/posts/posts.json' + '?auth=' + token, postInfo)
      .then(
        res => {
          // console.log(res)
        })
      .catch(error => {
        console.log(error)
      })
  },
  getAllProjects ({ commit }) {
    const token = localStorage.getItem('token')
    globalAxios.get('/posts/posts.json' + '?auth=' + token)
      .then(res => {
        commit('SET_PROJECTS_OBJECT', res.data)
        commit('SET_PROJECTS', Object.values(res.data))
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProjectDetail ({ commit, state }, projectId) {
    // console.log(stringSimilarity.compareTwoStrings('healed', 'sealed'))
    commit('SET_PROJECT_DETAIL', projectId)
  },
  updateProject ({ commit, state }, projectObject) {
    const token = localStorage.getItem('token')
    // update project based on comparing date
    const allProjects = state.projectsObjectOfObjects

    const entries = Object.entries(allProjects)
    let updatedPost = null

    for (const [uniqueId, project] of entries) {
      if (project.projectDate === projectObject.projectDate) {
        project[uniqueId] = projectObject
        updatedPost = project
      }
    }

    globalAxios.patch('/posts/posts.json' + '?auth=' + token, updatedPost)
      .then(
        res => {
          // console.log(res)
        })
      .catch(error => {
        console.log(error)
      })
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
