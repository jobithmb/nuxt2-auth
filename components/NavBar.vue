<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="index">
        Home
      </el-menu-item>
      <el-menu-item v-if="auth.isLoggedIn" index="about">
        About
      </el-menu-item>
      <el-menu-item v-if="auth.isLoggedIn" index="profile">
        Profile
      </el-menu-item>
      <el-menu-item v-if="!auth.isLoggedIn" index="login">
        Login
      </el-menu-item>
      <el-menu-item v-if="auth.isLoggedIn && user">
        Welcome, {{ user.firstName }}!
      </el-menu-item>
      <el-menu-item v-if="auth.isLoggedIn" index="logout">
        Logout
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  data () {
    return {
      activeIndex: 'home'
    }
  },
  computed: {
    ...mapGetters({
      auth: 'getAuth',
      user: 'getUser'
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === 'logout') {
        this.$store.dispatch('logout')
      } else {
        this.$router.push({ name: key })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
