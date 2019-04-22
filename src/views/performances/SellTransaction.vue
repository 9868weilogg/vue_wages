<template>
  <form>
    <v-select
      v-model="counter"
      v-validate="'required'"
      :items="companies.map(x => x.name)"
      :error-messages="errors.collect('counter')"
      label="Counter"
      data-vv-name="counter"
      required
    ></v-select>
    <v-text-field
      v-model="price"
      v-validate="'required'"
      :error-messages="errors.collect('price')"
      label="Price"
      data-vv-name="price"
      required
    ></v-text-field>
    <v-text-field
      v-model="quantity"
      v-validate="'required'"
      :error-messages="errors.collect('quantity')"
      label="Quantity"
      data-vv-name="quantity"
      required
    ></v-text-field>

    <v-btn color="primary" @click="submit">submit</v-btn>
    <v-btn color="primary" @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      companies: [
        {
          'name': 'Maybank',
          'code': '1155',
        },
        {
          'name': 'KESM',
          'code': '9233',
        },
      ],
      counter: null,
      price: '',
      quantity: '',
      dictionary: {
        attributes: {

        },
        custom: {
          price: {
            required: () => 'Price can not be empty',
          },
          quantity: {
            required: () => 'Quantity can not be empty',
          },
          counter: {
            required: 'Counter field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validate().then(valid => {
          if (!valid) {
            console.log('errors')
          } else {
            console.log('pass')
            let today   = new Date
            let counter = this.counter
            let company = this.companies.find(function(value) {
              return value.name == counter
            })
            let transaction = {
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
            }
            
            transaction.counterName      = company.name
            transaction.counterCode      = company.code
            transaction.quantity         = this.quantity
            transaction.averageCost      = this.price
            transaction.currentPrice     = this.price
            transaction.costOfInvestment = this.price * this.quantity
            transaction.currentValue     = this.price * this.quantity
            transaction.result           = transaction.currentValue - transaction.costOfInvestment
            transaction.transactionMonth = today.getMonth()
            transaction.transactionYear  = today.getFullYear()
            // console.log(transaction)
            this.$store.commit('performance/setTransaction', {'transaction': transaction})
            // console.log(this.$store.state.performance.transactions)
          }
        });
      },
      clear () {
        this.price = ''
        this.quantity = ''
        this.counter = null
        this.$validator.reset()
      }
    }
  }
</script>