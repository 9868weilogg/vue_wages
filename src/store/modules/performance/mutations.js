// https://vuex.vuejs.org/en/mutations.html

export default {
  setTransaction: (state, payload) => {
    state.transactions.push(payload.transaction)
  },
  setPickedMonth: (state, payload) => {
    state.pickedMonth.month = payload.month.month
    state.pickedMonth.year = payload.month.year
  },
}
