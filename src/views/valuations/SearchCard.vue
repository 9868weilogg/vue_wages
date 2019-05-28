<template>
  <div>
    <material-card
      color="purple"
      title="Search"
      text="Here is a subtitle for this table"
    >
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
      >
        <template
          slot="headerCell"
          slot-scope="{ header }"
        >
          <span
            class="subheading font-weight-light text-primary text--darken-3"
            v-text="header.text"
          />
        </template>
        <template
          slot="items"
          slot-scope="{ item }"
        >
          <tr @click="confirmAdd(item)">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </template>
      </v-data-table>
    </material-card>
    <v-dialog
      v-model="addStockDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Confirm Add
        </v-card-title>

        <v-card-text>
          Are you confirm to add this into watchlist?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            flat
            @click="validateItemExisted(readyAddItem)"
          >
            Yes
          </v-btn>
          <v-btn
            color="error"
            flat
            @click="addStockDialog = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    data: () => ({
      addStockDialog : false,
      readyAddItem : "",
      headers: [
        {
          sortable: false,
          text: 'Code',
          value: 'code'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
      ],
    }),
    methods :{
      confirmAdd(item) {
        this.addStockDialog = true
        this.readyAddItem = item
      },
      validateItemExisted(item) {
        let watchlistStocks = this.$store.state.valuation.watchlistStocks
        let stockExisted = watchlistStocks.filter(x => x.name == item.name)
        if(stockExisted.length > 0) {
          this.showSnackbar("Stock existed in watchlist.")
          this.addStockDialog = false
        } else {
          this.addItem(item)
        }
      },
      addItem(item) {
        this.$store.commit('valuation/setWatchlistStock', {'watchlistStock': item})
        this.$http({
          method: 'post',
          url: "http://localhost:8000/api/watchlist-items",
          data: {
            'code' : item.code,
            'watchlist_id' : 1,
          }
        })
        .then(response => {
          this.showSnackbar(response.data)
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
        this.addStockDialog = false
      },
      showSnackbar(text) {
        let value = {
          snackbar: true,
          y       : 'bottom',
          x       : 'right',
          mode    : '',
          timeout : 3000,
          text    : text,
        }
        this.$store.commit('app/setSnackbarState', value)
      },
    },
    computed: {
      items() {
        return this.$store.state.valuation.searchStock
      },
    }
  }
</script>