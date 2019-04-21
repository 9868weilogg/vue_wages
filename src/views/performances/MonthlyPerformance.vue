<template>
  <material-card
    color="purple"
    title="Monthly Result (January 2019)"
    text="Complete your profile"
  >
    <div class="table-responsive">
      <table class="table">
        <thead>
          <th>#</th>
          <th>Holding Counter</th>
          <th>Quantity<br/><span class="uom">(Units)</span></th>
          <th>Average Cost<br/><span class="uom">(RM)</span></th>
          <th>Cost of Investment<br/><span class="uom">(RM)</span></th>
          <th>Current price<br/><span class="uom">(RM)</span></th>
          <th>Current Value<br/><span class="uom">(RM)</span></th>
          <th>Gain/(Lost)<br/><span class="uom">(RM)</span></th>
          <th>Gain/(Lost)<br/><span class="uom">(%)</span></th>
          <th>Allocation<br/><span class="uom">(%)</span></th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in holdingCounters">
            <td>{{ index+1 }}</td>
            <td>{{ item.counterName }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.averageCost }}</td>
            <td>{{ item.costOfInvestment }}</td>
            <td>{{ item.currentPrice }}</td>
            <td>{{ item.currentValue }}</td>
            <td>{{ item.result }}</td>
            <td>{{ (item.result/item.costOfInvestment*100).toFixed(2) }}</td>
            <td>{{ (item.currentValue/totalInvestmentValue*100).toFixed(2) }}</td>
          </tr>
          <tr class="final">
            <td colspan="4">
              <span class="bold">Total Shares On Hand</span>
            </td>
            <td>
              <span class="bold">{{ totalInvestmentCost }}</span>
            </td>
            <td></td>
            <td>
              <span class="bold">{{ totalInvestmentValue }}</span>
            </td>
            <td>
              <span class="bold">{{ result }}</span>
            </td>
            <td>
              <span class="bold">{{ ((totalInvestmentValue-totalInvestmentCost)/totalInvestmentCost*100).toFixed(2) }}</span>
            </td>
            <td>
              <span class="bold">100</span>
            </td>
          </tr>
          <tr class="buy">
            <td colspan="10">
              <span class="bold">Counter "IN" this month</span>
            </td>
          </tr>
          <tr v-for="(item, index) in buyTransactions" class="buy">
            <td>{{ index+1 }}</td>
            <td>{{ item.counterName }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.averageCost }}</td>
            <td>{{ item.costOfInvestment }}</td>
            <td>{{ item.currentPrice }}</td>
            <td>{{ item.currentValue }}</td>
            <td>{{ item.result }}</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="sell">
            <td colspan="10">
              <span class="bold">Counter "OUT" this month</span>
            </td>
          </tr>
          <tr v-for="(item, index) in sellTransactions" class="sell">
            <td>{{ index+1 }}</td>
            <td>{{ item.counterName }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.averageCost }}</td>
            <td>{{ item.costOfInvestment }}</td>
            <td>{{ item.currentPrice }}</td>
            <td>{{ item.currentValue }}</td>
            <td>{{ item.result }}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="6">
              <span class="bold">Cash B/F last month</span>
            </td>
            <td>{{ lastMonthCash }}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="6">
              <span class="bold">Value B/F last month</span>
            </td>
            <td>{{ lastMonthValue }}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="6">
              <span class="bold">Cash balance this month</span>
            </td>
            <td>{{ currentMonthCash }}</td>
            <td></td>
            <td></td>
            <td>{{ (currentMonthCash/currentMonthValue*100).toFixed(2) }}</td>
          </tr>
          <tr>
            <td colspan="6">
              <span class="bold">Realised Profits/(Losses) this month</span>
            </td>
            <td>{{ realisedResult }}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="6">
              <span class="bold">Dividend Received</span>
            </td>
            <td>{{ totalDividend }}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="final">
            <td colspan="4">
              <span class="bold">Portfolio returns since Inception</span>
            </td>
            <td>
              <span class="bold">{{ lastMonthValue }}</span>
            </td>
            <td></td>
            <td>
              <span class="bold">{{ currentMonthValue }}</span>
            </td>
            <td>
              <span class="bold">{{ currentMonthValue-lastMonthValue }}</span>
            </td>
            <td>
              <span class="bold">{{ ((currentMonthValue-lastMonthValue)/lastMonthValue*100).toFixed(2) }}</span>
            </td>
            <td>
              <span class="bold">{{ (currentMonthCash/currentMonthValue*100).toFixed(2) }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </material-card>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    buyTransactions: {
      get() {
        return this.$store.getters['performance/buyTransactions']
      },
    },
    sellTransactions: {
      get() {
        return this.$store.getters['performance/sellTransactions']
      },
    },
    holdingCounters: {
      get() {
        return this.$store.getters['performance/holdingCounters']
      },
    },
    totalInvestmentCost: {
      get() {
        return this.$store.getters['performance/totalInvestmentCost']
      },
    },
    totalInvestmentValue: {
      get() {
        return this.$store.getters['performance/totalInvestmentValue']
      },
    },
    result: {
      get() {
        return this.$store.getters['performance/result']
      },
    },
    totalDividend: {
      get() {
        return this.$store.getters['performance/totalDividend']
      },
    },
    cash: {
      get() {
        return this.$store.state.performance.cash
      },
    },
    lastMonthCash: {
      get() {
        return this.cash.filter(x => x.month == 12).filter(x => x.year == 2018)[0].amount
      },
    },
    currentMonthCash: {
      get() {
        let cashToBuy = 0
        let cashFromSell = 0
        this.buyTransactions.forEach(function(value) {
          cashToBuy += value.currentValue
        })
        this.sellTransactions.forEach(function(value) {
          cashFromSell += value.currentValue
        })
        return this.lastMonthCash - cashToBuy + cashFromSell + this.totalDividend
      }
    },
    realisedResult: {
      get() {
        let sum = 0
        this.sellTransactions.forEach(function(value) {
          sum += value.result
        })
        return sum
      },
    },
    value: {
      get() {
        return this.$store.state.performance.portfolioValue
      },
    },
    lastMonthValue: {
      get() {
        return this.value.filter(x => x.month == 12).filter(x => x.year == 2018)[0].amount
      },
    },
    currentMonthValue: {
      get() {
        return this.lastMonthValue + this.currentMonthCash
      },
    },
  }
}
</script>

<style>
.table td, .table th {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
}

span.uom {
  font-size: 12px;
}

.buy{
  background-color: #ffc6d4;
}

.sell{
  background-color: #cdffc9;
}

.final{
  background-color: #fff0c9;
}

span.bold {
  font-weight: 900;
}
</style>