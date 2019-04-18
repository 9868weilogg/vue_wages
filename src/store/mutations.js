// https://vuex.vuejs.org/en/mutations.html

export default {
  updateCompanyHeaders: (state, payload) => {
    state.companyHeaders.splice(1,3) 
    payload.select.forEach(function(value, index) {
      let key = 'company' + (index + 1)
      state.companyHeaders.push({
        sortable: false,
        text: value,
        value: key
      })
    })
    state.companies.shown.splice(0,state.companies.shown.length)
  },
}
