<template>
  <div>
    <material-card
      color="purple"
      title="Watchlist"
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
          <tr @click="confirmDelete(item)">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.change }}</td>
            <td class="text-xs-right">{{ item.salary }}</td>
          </tr>
        </template>
      </v-data-table>
    </material-card>
    <v-dialog
      v-model="confirmDeleteDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Confirm Delete
        </v-card-title>

        <v-card-text>
          Are you confirm to delete this?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="warning"
            flat
            @click="deleteItem(readyDeleteItem)"
          >
            Yes
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="confirmDeleteDialog = false"
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
  
  data: () => ({
    confirmDeleteDialog : false,
    readyDeleteItem: "",
    headers: [
      {
        sortable: false,
        text: 'Stock',
        value: 'stock'
      },
      {
        sortable: false,
        text: 'Price (RM)',
        value: 'price'
      },
      {
        sortable: false,
        text: 'Change (%)',
        value: 'change'
      },
    ],
  }),
  methods : {
    confirmDelete(item){
      this.confirmDeleteDialog = true
      this.readyDeleteItem = item
    },
    deleteItem(item) {
      this.items.splice(this.items.indexOf(item),1)
      this.confirmDeleteDialog = false
      this.showSnackbar("Stock deleted from watchlist.")
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
    items: {
      get() {
        return this.$store.state.valuation.watchlistStocks
      }
    }
  }
}
</script>