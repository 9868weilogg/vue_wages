// https://vuex.vuejs.org/en/getters.html

export default {
  allCompanies: state => {
    // let array = []
    state.companyData.forEach(function(value) {
      state.companies.all.push(value.company)
    })
    return state.companies.all
  },
  showCompanies: state => {
    // let array = []
    for(let key in state.companyHeaders) {
      if(key != 0) {
        // console.log(key)
        state.companies.shown.push(state.companyHeaders[key].text)  
      }
    }
    return state.companies.shown
  },
  companyData: (state, getters) => {
    let companies = getters.showCompanies
    let array = []
    companies.forEach(function(company) {
      // console.log(state.companyData.filter(x => x.company == company))
      array.push(state.companyData.filter(x => x.company == company)[0])
    })
    return array
  },
  fcfYieldItems: (state, getters) => {
    let fcfYield      = getters.companyData[0].fye
    let array         = []
    let company1Value = 0
    let company2Value = 0
    let company3Value = 0
    for(let i=0; i<fcfYield.length; i++) {
      if(getters.companyData[0]) company1Value = getters.companyData[0].fye[i].fcfYield
      if(getters.companyData[1]) company2Value = getters.companyData[1].fye[i].fcfYield
      if(getters.companyData[2]) company3Value = getters.companyData[2].fye[i].fcfYield
      array.push({
        'field': fcfYield[i].year,
        'company1': company1Value,
        'company2': company2Value,
        'company3': company3Value,
      })
    } 
    return array
  },
  intrinsicFairValueItems: (state, getters) => {
    let intrinsicFairValue = getters.companyData[0].intrinsicFairValue
    let array              = []
    let company1Value      = 0
    let company2Value      = 0
    let company3Value      = 0
    for(let i=0; i<intrinsicFairValue.length; i++) {
      if(getters.companyData[0]) company1Value = getters.companyData[0].intrinsicFairValue[i].value
      if(getters.companyData[1]) company2Value = getters.companyData[1].intrinsicFairValue[i].value
      if(getters.companyData[2]) company3Value = getters.companyData[2].intrinsicFairValue[i].value
      array.push({
        'field': intrinsicFairValue[i].field,
        'company1': company1Value,
        'company2': company2Value,
        'company3': company3Value,
      })
    } 
    return array
  },
  fundamentalAnalysisItems: (state, getters) => {
    let fundamentalAnalysis = getters.companyData[0].fundamentalAnalysis
    let array               = []
    let company1Value       = 0
    let company2Value       = 0
    let company3Value       = 0
    for(let i=0; i<fundamentalAnalysis.length; i++) {
      if(getters.companyData[0]) company1Value = getters.companyData[0].fundamentalAnalysis[i].value
      if(getters.companyData[1]) company2Value = getters.companyData[1].fundamentalAnalysis[i].value
      if(getters.companyData[2]) company3Value = getters.companyData[2].fundamentalAnalysis[i].value
      array.push({
        'field': fundamentalAnalysis[i].field,
        'company1': company1Value,
        'company2': company2Value,
        'company3': company3Value,
      })
    } 
    return array
  },
}
