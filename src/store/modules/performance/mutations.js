// https://vuex.vuejs.org/en/mutations.html

export default {
  setTransaction: (state, payload) => {
    state.transactions.push(payload.transaction)
  },
}
