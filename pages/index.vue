<template>
  <div class="home-container">
    首页内容
  </div>
</template>

<script>
import { homeApi } from '~/api'

export default {
  // middleware: 'auth',
  async asyncData({ $axios }) {
    const res = await $axios.$get(homeApi.GET_CONTENT)
    return {
      homeContent: res.data.content
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  color: #35495e;
  display: block;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
