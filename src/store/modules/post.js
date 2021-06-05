import globalAxios from 'axios'

const state = {
  allTodoItems: null,
  projectDetail: null,
  projectsObjectOfObjects: null
}

const mutations = {
  SET_PROJECTS (state, allProjects) {
    state.allTodoItems = allProjects
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
    // const token = localStorage.getItem('token')
    globalAxios.get('/posts/posts.json')
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          /**  since endpoint returns an object of objects,
           /*   spread this and add a new key value pair
           /*  convert into array of objects
           **/
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('SET_PROJECTS', postsArray)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProjectDetail ({ commit, state }, projectId) {
    // console.log(stringSimilarity.compareTwoStrings('healed', 'sealed'))
    commit('SET_PROJECT_DETAIL', projectId)
  },
  updateProject ({ commit, state, dispatch }, projectUpdate) {
    globalAxios.patch('/posts/posts' + projectUpdate.id + '.json', projectUpdate)
      .then(
        res => {
          console.log(res)
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
  },
  allOfThem: state => {
    return state.allTodoItems
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
