<template>
  <div>
    <material-card
      color="purple"
      title="Intrinsic and Fair Value"
      text="Here is a subtitle for this table"
    >
      <v-data-table
        :headers="headers"
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

    }),
    methods :{

    },
    computed: {
      intrinsicFairValueItems() {
        return this.$store.getters['valuation/intrinsicFairValueItems']
      },
      headers() {
        return this.$store.state.valuation.companyHeaders
      },
    },
  }
</script>