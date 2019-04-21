// https://vuex.vuejs.org/en/getters.html

export default {
  buyTransactions: (state) => {
    return state.transactions.filter(x => x.type == "buy")
  },
  sellTransactions: (state) => {
    return state.transactions.filter(x => x.type == "sell")
  },
  totalInvestmentCost: (state, getters) => {
    let sum = 0
    getters.holdingCounters.forEach(function(value) {
      sum += value.costOfInvestment
    })
    return sum
  },
  totalInvestmentValue: (state, getters) => {
    let sum = 0
    getters.holdingCounters.forEach(function(value) {
      sum += value.currentValue
    })
    return sum
  },
  result: (state, getters) => {
    let sum = 0
    getters.holdingCounters.forEach(function(value) {
      sum += value.result
    })
    return sum
  },
  holdingCounters: (state) => {
    let counterArray    = []
    let holdingCounters = []

    state.transactions.forEach(function(value) {
      counterArray.push(value.counterName)
    })
    let uniqueCounters = [...new Set(counterArray)]

    uniqueCounters.forEach(function(value) {
      let quantity         = 0
      let averageCost      = 0
      let costOfInvestment = 0
      let currentPrice     = 13.00
      let currentValue     = 0
      let result           = 0
      let counterName      = ""
      let counterCode      = ""
      let counters         = state.transactions.filter(x => x.counterName == value)
      counters.forEach(function(value) {
        if(value.type == "buy") {
          quantity         += value.quantity
          averageCost      += (value.averageCost)/counters.filter(x => x.type == "buy").length
          costOfInvestment += value.costOfInvestment
        } else if(value.type == "sell") {
          quantity         -= value.quantity
          averageCost      -= (value.averageCost)/counters.filter(x => x.type == "buy").length
          costOfInvestment -= value.costOfInvestment
        }
        counterName      = value.counterName
        counterCode      = value.counterCode
      })
      currentValue = quantity * currentPrice
      result       = currentValue - costOfInvestment

      holdingCounters.push({
        counterName     : counterName,
        counterCode     : counterCode,
        quantity        : quantity,
        averageCost     : averageCost,
        currentPrice    : currentPrice,
        costOfInvestment: costOfInvestment,
        currentValue    : currentValue,
        result          : result,
      })
    })    
    return holdingCounters  
  },
  totalDividend: (state) => {
    let sum = 0
    state.dividends.forEach(function(value) {
      sum += value.dividend
    })
    return sum
  },
}
