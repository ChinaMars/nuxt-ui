import { globalApi } from '~/api'

export const state = () => ({
  user: {
    name: '',
    isLogin: false
  },
  headerMenu: {}
})

export const mutations = {
  SET_USER(state, user) {
    state.user.name = user.name
    state.user.isLogin = user.isLogin
  },
  SET_HEADER_MENU(state, headerMeu) {
    state.headerMenu = headerMeu
  }
}

export const actions = {
  fetchGlobalInfo({ commit }) {
    return this.$axios
      .$get(globalApi.GET_INFO)
      .then(res => {
        commit('SET_USER', {
          name: res.data.nickname,
          isLogin: res.data.isLoginIn
        })
      })
      .catch(() => {

      })
  },
  fetchHeaderMenuInfo({ commit }) {
    return this.$axios
    .$get(globalApi.GET_HEADER_MENU)
    .then(res => {
      commit('SET_HEADER_MENU', res.data.items)
    })
    .catch(() => {

    })
  }
}