import axios from 'axios'

// signup
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// login
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:'
})

export default instance
