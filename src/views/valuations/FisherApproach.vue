<template>
  <div>
    <material-card
      color="purple"
      title="Fisher Approach"
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
          <td>{{ item.field }}</td>
          <td>{{ item.mark }}</td>
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
          text: 'Field',
          value: 'field'
        },
        {
          sortable: false,
          text: 'Mark',
          value: 'mark'
        },
      ],
      items: [
        {
          field: 'Future Grow',
          mark: '5%',
        },
        {
          field: 'Competitiveness',
          mark: '5%',
        },
        {
          field: 'Net Margin > 15%',
          mark: '5%',
        },
        {
          field: 'GP Cash > 0.8',
          mark: '5%',
        },
        {
          field: 'Marginal Cost',
          mark: '5%',
        },
        {
          field: 'Leadership',
          mark: '5%',
        },
        {
          field: 'Talent',
          mark: '5%',
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