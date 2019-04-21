<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />

    <core-snackbar />
  </v-app>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        
      }
    },
    methods: {
    
    },
  }
</script>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
