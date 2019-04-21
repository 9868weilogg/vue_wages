<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md12
      >
        <monthly-performance></monthly-performance>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MonthlyPerformance from './performances/MonthlyPerformance'
export default {
  data() {
    return {
      
    }
  },
  components: {
    MonthlyPerformance,
  },
  computed: {
    
  }
}
</script>

