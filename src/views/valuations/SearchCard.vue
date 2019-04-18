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
          <tr @click="addWatchlist(item)">
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
            @click="addStockDialog = false"
          >
            Yes
          </v-btn>
          <v-btn
            color="primary"
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
      items: [
        {
          code: '1155',
          name: 'Maybank',
        },
        {
          code: '5250',
          name: 'SEM',
        },
      ]
    }),
    methods :{
      addWatchlist(item) {
        console.log(item)
        this.addStockDialog = true
      }
    },
  }
</script>