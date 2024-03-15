<template>
  <div class="page">
    <h1>This is home page.</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    let auth = localStorage.getItem('dummy-auth')
    auth = auth
      ? JSON.parse(auth)
      : {
          id: null,
          token: null,
          isLoggedIn: false
        }
    this.$store.commit('setAuth', auth)
  }
}
</script>
