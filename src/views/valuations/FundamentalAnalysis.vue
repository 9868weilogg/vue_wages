<template>
  <div>
    <material-card
      color="purple"
      title="Fundamental Analysis"
      text="Here is a subtitle for this table"
    >
      <v-data-table
        :headers="headers"
        :items="fundamentalAnalysisItems"
        hide-actions
      >
        <template
          slot="headerCell"
          slot-scope="{ header }"
        >
          <span
            class="subheading font-weight-light text-primary text--darken-3"
            v-text="header.text"
            @click="showDialog()"
          />
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <!-- <template v-slot:activator="{ on }">
              <v-btn
                color="red lighten-2"
                dark
                v-on="on"
              >
                Click Me
              </v-btn>
            </template> -->

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="dialog = false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      dialog: false,
    }),
    methods: {
      addWatchlist(item) {
        console.log(item)
        this.addStockDialog = true
      },
      showDialog() {
        this.dialog = true
      }
    },
    computed: {
      fundamentalAnalysisItems() {
        return this.$store.getters['valuation/fundamentalAnalysisItems']
      },
      headers() {
        return this.$store.state.valuation.companyHeaders
      },
    }
  }
</script>