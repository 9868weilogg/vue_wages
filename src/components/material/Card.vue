<template>
  <v-card
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  >
    <helper-offset
      v-if="hasOffset"
      :inline="inline"
      :full-width="fullWidth"
      :offset="offset"
    >
      <v-card
        v-if="!$slots.offset"
        :color="color"
        :class="`elevation-${elevation}`"
        class="v-card--material__header"
        dark
      >
        <slot
          v-if="!title && !text"
          name="header"
        />
        <span v-else>
          <h4
            class="title font-weight-light mb-2"
            v-text="title"
          />
          <!-- <p
            class="category font-weight-thin"
            v-text="text"
          /> -->
          <!-- <span v-if="watchlistToolbar">
            <v-select
              :items="$store.state.watchlists"
              item-value="id"
              item-text="name"
              label="Watchlists"
              @change="switchWatchlist"
            ></v-select>
            
          </span> -->
          <span v-if="searchToolbar">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Stock Name"
              single-line
              hide-details
            ></v-text-field>
          </span>
          <span v-if="companyToolbar">
            <v-combobox
              v-model="select"
              :items="items"
              label="I use chips"
              multiple
              chips
            ></v-combobox>
          </span>
        </span>
      </v-card>
      <slot
        v-else
        name="offset"
      />
    </helper-offset>

    <v-card-text>
      <slot />
    </v-card-text>

    <v-divider
      v-if="$slots.actions"
      class="mx-3"
    />

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      watchlistToolbar: false,
      searchToolbar: false,
      companyToolbar: false,
    }
  },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 24
    },
    title: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    }
  },

  methods: {
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
    hasOffset () {
      return this.$slots.header ||
        this.$slots.offset ||
        this.title ||
        this.text
    },
    styles () {
      if (!this.hasOffset) return null

      return {
        marginBottom: `${this.offset}px`,
        marginTop: `${this.offset * 2}px`
      }
    },
    items() {
      return this.$store.getters.allCompanies
    },
    select: {
      get() {
        return this.$store.getters.showCompanies
      },
      set(value) {
        this.$store.commit('clearShownCompanies', [])
        this.$store.commit('updateCompanyHeaders', {'select': value})
        if(this.select.length > 3)
          this.showSnackbar('System able to show maximum 3 companies only.')
        else
          this.showSnackbar('Company list updated.')
      },
    }
  },

  mounted() {
    if(this.title == "Watchlist") {
      this.watchlistToolbar = true
    } else if(this.title == "Search" || this.title == "Fundamental") {
      this.searchToolbar = true
    } else if(this.title == "Free Cash Flow Yield") {
      this.companyToolbar = true
    }
  },
}
</script>

<style lang="scss">
  .v-card--material {
    &__header {
      &.v-card {
        border-radius: 4px;
      }
    }
  }
</style>
