
export const state = () => ({
  toggle: false
})

export const mutations = {
  toggleChange(state) {
    state.toggle = !state.toggle
  }
}
