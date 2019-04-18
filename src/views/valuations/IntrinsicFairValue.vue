<template>
  <div>
    <material-card
      color="purple"
      title="Intrinsic and Fair Value"
      text="Here is a subtitle for this table"
    >
      <v-data-table
        :headers="$store.state.companyHeaders"
        :items="intrinsicFairValueItems"
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
          <td>{{ item.field }}</td>
          <td>{{ item.company1 }}</td>
          <td>{{ item.company2 }}</td>
          <td>{{ item.company3 }}</td>
        </template>
      </v-data-table>
    </material-card>
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
          text: 'field',
          value: 'field'
        },
        {
          sortable: false,
          text: 'Maybank',
          value: 'company1'
        },
        {
          sortable: false,
          text: 'Wellcall',
          value: 'company2'
        },
        {
          sortable: false,
          text: 'Inari',
          value: 'company3'
        },
      ],
    }),
    methods :{
      addWatchlist(item) {
        console.log(item)
        this.addStockDialog = true
      }
    },
    computed: {
      intrinsicFairValueItems() {
        return this.$store.getters.intrinsicFairValueItems
      },
    },
  }
</script>