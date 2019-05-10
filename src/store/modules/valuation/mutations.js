// https://vuex.vuejs.org/en/mutations.html

export default {
  updateCompanyHeaders: (state, payload) => {
    state.companyHeaders.splice(1, state.companyHeaders.length - 1) 
    payload.select.forEach(function(value, index) {
      let key = 'company' + (index + 1)
      state.companyHeaders.push({
        sortable: false,
        text: value,
        value: key
      })
    })
  },
  clearShownCompanies: (state, payload) => {
    state.companies.shown = payload
  },
  setSearchStock: (state, payload) => {
    state.searchStock = payload.searchStock
  },
  setWatchlistStock: (state, payload) => {
    state.watchlistStocks.push(payload.watchlistStock)
  },
  setBuffettMark: (state, payload) => {
    let item = payload.item
    let object = state.buffettApproach.find(function(value) {
      return value.field == item.field
    })
    object.mark = payload.mark
  },
  undoBuffettMark: (state, payload) => {
    let item = payload.item
    let object = state.buffettApproach.find(function(value) {
      return value.field == item.field
    })
    object.mark = payload.mark
  },
  setFisherMark: (state, payload) => {
    let item = payload.item
    let object = state.fisherApproach.find(function(value) {
      return value.field == item.field
    })
    object.mark = payload.mark
  },
  undoFisherMark: (state, payload) => {
    let item = payload.item
    let object = state.fisherApproach.find(function(value) {
      return value.field == item.field
    })
    object.mark = payload.mark
  },
  apiGetAllStocks: (state, payload) => {
    state.allStocks = payload.stocks
  },
}
