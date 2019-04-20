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
            @click="addItem(readyAddItem)"
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
      addItem(item) {
        this.$store.commit('valuation/setWatchlistStock', {'watchlistStock': item})
        this.addStockDialog = false
        this.showSnackbar("Stock added into watchlist.")
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