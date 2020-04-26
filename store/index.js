export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('global/fetchGlobalInfo')
    await dispatch('global/fetchHeaderMenuInfo')
  }
}