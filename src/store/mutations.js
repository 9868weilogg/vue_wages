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
}
