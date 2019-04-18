<template>
  <div>
    <material-card
      color="purple"
      title="Fundamental"
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
          <td>{{ item.fye }}</td>
          <td>{{ item.field1 }}</td>
          <td>{{ item.field2 }}</td>
          <td>{{ item.field3 }}</td>
          <td>{{ item.field4 }}</td>
          <td>{{ item.field5 }}</td>
          <td>{{ item.field6 }}</td>
          <td>{{ item.field7 }}</td>
          <td>{{ item.field8 }}</td>
          <td>{{ item.field9 }}</td>
          <td>{{ item.field10 }}</td>
          <td>{{ item.field11 }}</td>
          <td>{{ item.field12 }}</td>
          <td>{{ item.field13 }}</td>
          <td>{{ item.field14 }}</td>
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
          text: 'FYE',
          value: 'fye'
        },
        {
          sortable: false,
          text: 'PE',
          value: 'field1'
        },
        {
          sortable: false,
          text: 'DY',
          value: 'field2'
        },
        {
          sortable: false,
          text: 'DPS',
          value: 'field3'
        },
        {
          sortable: false,
          text: 'EPS',
          value: 'field4'
        },
        {
          sortable: false,
          text: 'Net Profit GR',
          value: 'field5'
        },
        {
          sortable: false,
          text: 'GP Cash',
          value: 'field6'
        },
        {
          sortable: false,
          text: 'Cash',
          value: 'field7'
        },
        {
          sortable: false,
          text: 'Short Term Loan',
          value: 'field8'
        },
        {
          sortable: false,
          text: 'Long Term Loan',
          value: 'field9'
        },
        {
          sortable: false,
          text: 'Gearing',
          value: 'field10'
        },
        {
          sortable: false,
          text: 'FCF/share',
          value: 'field11'
        },
        {
          sortable: false,
          text: 'Net Margin',
          value: 'field12'
        },
        {
          sortable: false,
          text: 'ROE',
          value: 'field13'
        },
        {
          sortable: false,
          text: 'ROA',
          value: 'field14'
        },
      ],
      items: [
        {
          fye: '2018',
          field1: '5%',
          field2: '5%',
          field3: '5%',
          field4: '5%',
          field5: '5%',
          field6: '5%',
          field7: '5%',
          field8: '5%',
          field9: '5%',
          field10: '5%',
          field11: '5%',
          field12: '5%',
          field13: '5%',
          field14: '5%',
        },
        {
          fye: '2017',
          field1: '5%',
          field2: '5%',
          field3: '5%',
          field4: '5%',
          field5: '5%',
          field6: '5%',
          field7: '5%',
          field8: '5%',
          field9: '5%',
          field10: '5%',
          field11: '5%',
          field12: '5%',
          field13: '5%',
          field14: '5%',
        },
        {
          fye: '2016',
          field1: '5%',
          field2: '5%',
          field3: '5%',
          field4: '5%',
          field5: '5%',
          field6: '5%',
          field7: '5%',
          field8: '5%',
          field9: '5%',
          field10: '5%',
          field11: '5%',
          field12: '5%',
          field13: '5%',
          field14: '5%',
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