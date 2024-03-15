<template>
  <div class="page">
    <h1>This is profile page.</h1>
    <div>
      {{ user }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfilePage',
  middleware: 'auth',
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>
