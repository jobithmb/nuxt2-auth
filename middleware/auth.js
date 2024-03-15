import Vue from 'vue'
export default function ({ store, redirect }) {
  if (!store.state.auth.isLoggedIn) {
    Vue.prototype.$message.error('Login required.')
    redirect('/login')
  }
}
