export const state = () => ({
  toggleInfo: true
})

export const mutations = {
  toggleChange(state) {
    state.toggleInfo = !state.toggleInfo
  }
}
