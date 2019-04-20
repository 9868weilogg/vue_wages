<template>
  <div>
    <v-snackbar
      v-model="snackbarState.snackbar"
      :bottom="snackbarState.y === 'bottom'"
      :left="snackbarState.x === 'left'"
      :multi-line="snackbarState.mode === 'multi-line'"
      :right="snackbarState.x === 'right'"
      :timeout="snackbarState.timeout"
      :top="snackbarState.y === 'top'"
      :vertical="snackbarState.mode === 'vertical'"
    >
      {{ snackbarState.text }}
      <v-btn
        color="warning"
        flat
        @click="snackbarState.snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    
  </div>
</template>

<script>
// Utilities
// import {
//   mapMutations,
//   mapState
// } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    snackbarState: {
      get() {
        return this.$store.state.app.snackbarState      
      },
      // set(value) {
      //   this.$store.commit('app/setSnackbarState', value)
      // },
    },
  },
  mounted () {
    
  },
  beforeDestroy () {

  },
  methods: {
    
  },
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>
