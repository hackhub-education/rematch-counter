export const count = {
  state: 0,
  reducers: {
    increment(state, payload) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, state) {
      await new Promise(resolve => setTimeout(resolve, 5000))
      dispatch.count.increment(payload)
    }
  })
}