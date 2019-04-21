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
          <tr @click="updateMarkDialog(item)">
            <td>{{ item.field }}</td>
            <td>{{ item.mark }}</td>
          </tr>
        </template>
      </v-data-table>
    </material-card>
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{ selectedItem.field }}
        </v-card-title>

        <v-card-text>
          <v-select
            :items="marks"
            :value="selectedItem.mark"
            label="Mark"
            ref="mark"
            @change="changeMark($event)"
            outline
          ></v-select>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="updateMark()"
          >
            Update
          </v-btn>
          <v-btn
            color="error"
            flat
            @click="undoMark()"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    data: () => ({
      dialog : false,
      selectedItem: "",
      newMark: "",
      marks: [1, 2, 3, 4, 5],
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
    }),
    methods :{
      updateMarkDialog(item) {
        this.dialog = true
        this.selectedItem = item
      },
      updateMark() {
        this.$store.commit('valuation/setFisherMark', {'mark': this.newMark, 'item': this.selectedItem})
        this.dialog = false
      },
      undoMark() {
        this.$store.commit('valuation/undoFisherMark', {'mark': this.$refs.mark.value, 'item': this.selectedItem})
        this.dialog = false
      },
      changeMark(event) {
        this.newMark = event
      },
    },
    computed: {
      items() {
        return this.$store.state.valuation.fisherApproach
      },
    },
  }
</script>