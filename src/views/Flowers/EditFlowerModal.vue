<template>
  <v-dialog v-model="modal" width="400px">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text class="warning">Edit</v-btn>
    </template>
    <v-card class="pa-3">
      <v-row justify="center">
        <v-col cols="12">
          <v-card-title>
            <h1 class="text--primary">Edit Flower</h1>
          </v-card-title>
        </v-col>
      </v-row>
      
      <v-row justify="center">
        <v-col cols="12">
          <v-card-text>
            <v-text-field
              name="title"
              label="Title"
              type="text"
              v-model="editedTitle"
            ></v-text-field>
            <v-textarea
              name="desc"
              label="Description"
              type="text"
              v-model="editedDesc"
              class="mb-3"
            ></v-textarea>
          </v-card-text>
        </v-col>
      </v-row>
      
      <v-row justify="center">
        <v-col cols="12">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onClose">Close</v-btn>
            <v-btn color="success" @click="onSave">Save</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['flower'],
  data() {
    return {
      modal: false,
      editedTitle: this.flower ? this.flower.title : '',
      editedDesc: this.flower ? this.flower.desc : ''
    }
  },
  methods: {
    onClose() {
      this.modal = false
    },
    onSave() {
      if (this.editedTitle && this.editedDesc) {
        const updatedFlower = {
          id: this.flower.id,
          title: this.editedTitle,
          desc: this.editedDesc
        }
        this.$store.dispatch('updateFlower', updatedFlower)
        this.modal = false
      }
    }
  }
}
</script>
