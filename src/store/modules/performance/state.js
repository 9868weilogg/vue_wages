export default {
  transactions: [
    {
      counterName: "Maybank",
      counterCode: "1155",
      quantity: 10,
      averageCost: 12.00,
      currentPrice: 13.00,
      transactionMonth: 1,
      transactionYear: 2019,
      costOfInvestment: 120.00,
      currentValue: 130.00,
      result: 10.00,
      type: "buy",
    },
    {
      counterName: "KESM",
      counterCode: "9233",
      quantity: 10,
      averageCost: 12.00,
      currentPrice: 13.00,
      transactionMonth: 1,
      transactionYear: 2019,
      costOfInvestment: 120.00,
      currentValue: 130.00,
      result: 10.00,
      type: "buy",
    },
    {
      counterName: "Maybank",
      counterCode: "1155",
      quantity: 10,
      averageCost: 12.00,
      currentPrice: 13.00,
      transactionMonth: 1,
      transactionYear: 2019,
      costOfInvestment: 120.00,
      currentValue: 130.00,
      result: 10.00,
      type: "buy",
    },
    {
      counterName: "Maybank",
      counterCode: "1155",
      quantity: 10,
      averageCost: 12.00,
      currentPrice: 13.00,
      transactionMonth: 1,
      transactionYear: 2019,
      costOfInvestment: 120.00,
      currentValue: 130.00,
      result: 10.00,
      type: "sell",
    },
  ],
  dividends: [
    {
      'counterName': "Maybank",
      'counterCode': "1155",
      'dividend': 0.10,
      'transactionMonth': 1,
      'transactionYear': 2019,
    },
    {
      'counterName': "KESM",
      'counterCode': "9233",
      'dividend': 0.10,
      'transactionMonth': 1,
      'transactionYear': 2019,
    },
  ],
  cash: [
    {
      'month': 12,
      'year': 2018,
      'amount': 1000,
    },
  ],
  portfolioValue: [
    {
      'month': 12,
      'year': 2018,
      'amount': 1000,
    },
  ],
  'months': [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  'pickedMonth': {
    'month': (new Date()).getMonth(),
    'year': (new Date()).getFullYear(),
  }
}