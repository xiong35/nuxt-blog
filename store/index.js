export const state = () => ({
  activeTags: [],
  duckAlive: true
})

export const mutations = {
  toggleActiveTag(state, payload) {
    // give a tag id
    for (let index in state.activeTags) {
      if (state.activeTags[index] == payload) {
        state.activeTags.splice(index, 1)
        return
      }
    }
    state.activeTags.push(payload)
  },
  toggleDuck(state) {
    state.duckAlive = !state.duckAlive
  },
}