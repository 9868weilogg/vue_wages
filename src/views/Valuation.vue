<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md6
      >
        <WatchlistCard></WatchlistCard>
      </v-flex>
      <v-flex
        md6
      >
        <SearchCard></SearchCard>
      </v-flex>
      <v-flex
        md12
      >
        <FcfYieldCard></FcfYieldCard>
      </v-flex>
      <v-flex
        md6
      >
        <IntrinsicFairValue></IntrinsicFairValue>
      </v-flex>
      <v-flex
        md6
      >
        <FundamentalAnalysis></FundamentalAnalysis>
      </v-flex>
      <v-flex
        md6
      >
        <BuffettApproach></BuffettApproach>
      </v-flex>
      <v-flex
        md6
      >
        <FisherApproach></FisherApproach>
      </v-flex>
      <v-flex
        md12
      >
        <FundamentalCard></FundamentalCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WatchlistCard from '@/views/valuations/WatchlistCard.vue'
import SearchCard from '@/views/valuations/SearchCard.vue'
import FcfYieldCard from '@/views/valuations/FcfYieldCard.vue'
import IntrinsicFairValue from '@/views/valuations/IntrinsicFairValue.vue'
import FundamentalAnalysis from '@/views/valuations/FundamentalAnalysis.vue'
import FundamentalCard from '@/views/valuations/FundamentalCard.vue'
import BuffettApproach from '@/views/valuations/BuffettApproach.vue'
import FisherApproach from '@/views/valuations/FisherApproach.vue'

export default {
  components: {
    WatchlistCard : WatchlistCard,
    SearchCard : SearchCard,
    FcfYieldCard : FcfYieldCard,
    IntrinsicFairValue : IntrinsicFairValue,
    FundamentalAnalysis : FundamentalAnalysis,
    FundamentalCard : FundamentalCard,
    BuffettApproach : BuffettApproach,
    FisherApproach : FisherApproach,
  },
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Country',
        value: 'country'
      },
      {
        sortable: false,
        text: 'City',
        value: 'city'
      },
      {
        sortable: false,
        text: 'Salary',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
      {
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      },
      {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }, {
        name: 'Mason Porter',
        country: 'Chile',
        city: 'Gloucester',
        salary: '$78,615'
      }
    ]
  }),
  methods :{
    
  },
  mounted() {
    console.log(this.$store.state.company1)
  }
}
</script>
