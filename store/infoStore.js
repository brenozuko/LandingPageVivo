export const state = () => ({
  apiResult: [],
  tabIndex: 0,
})

export const mutations = {
  setResult(state, value) {
    state.apiResult = value
  },
  setTabIndex (state, value) {
    state.tabIndex = value
  }

}
