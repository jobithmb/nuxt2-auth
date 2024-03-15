import Vue from 'vue'
export const state = () => ({
  isLoading: false,
  user: null,
  auth: {
    id: null,
    token: null,
    isLoggedIn: false
  }
})

export const getters = {
  getLoading (state) {
    return state.isLoading
  },
  getUser (state) {
    return state.user
  },
  getAuth (state) {
    return state.auth
  }
}

export const mutations = {
  setLoading (state, value) {
    state.isLoading = value
  },
  setUser (state, value) {
    state.user = value
  },
  setAuth (state, value) {
    state.auth = value
    localStorage.setItem('dummy-auth', JSON.stringify(value))
  }
}

export const actions = {
  login ({ commit }, payload) {
    // set the loader
    commit('setLoading', true)
    // make the api call
    this.$axios
      .post('https://dummyjson.com/auth/login', payload)
      .then((res) => {
        const {
          email,
          firstName,
          gender,
          id,
          image,
          lastName,
          token,
          username
        } = res.data
        commit('setAuth', { id, token, isLoggedIn: true })
        commit('setUser', {
          email,
          firstName,
          gender,
          id,
          image,
          lastName,
          username
        })
        this.$router.push('/')
        Vue.prototype.$message.success('Login successful!')
      })
      .catch(e => console.log)
      .finally(e => commit('setLoading', false))
  },
  logout ({ commit }) {
    commit('setAuth', {
      id: null,
      token: null,
      isLoggedIn: false
    })
    commit('setUser', null)
    Vue.prototype.$message.success('Logout successful!')
    this.$router.push('/login')
  }
}
