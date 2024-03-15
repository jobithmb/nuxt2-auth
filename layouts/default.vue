<template>
  <div v-loading.fullscreen.lock="loading" class="app-layout">
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppLayout',
  computed: {
    ...mapGetters({
      loading: 'getLoading'
    })
  }
}
</script>

<style scoped>
.app-layout {
}
</style>
