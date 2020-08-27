
export const state = () => ({
  toggle: true
})

export const mutations = {
  toggleChange(state) {
    state.toggle = !state.toggle
  }
}
