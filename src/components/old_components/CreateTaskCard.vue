<template>
  <v-overlay class="d-flex align-center justify-center">
    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400">

      <v-card-title>Создать задание</v-card-title>

      <v-divider/>

      <v-card-text>
        <v-text-field
          v-model="task.name"
          label="Название"
          variant="underlined">
        </v-text-field>

        <v-radio-group v-model="task.type">
          <v-radio label="Лекция" value="lecture"></v-radio>
          <v-radio label="Тест" value="test"></v-radio>
        </v-radio-group>

        <v-btn
          @click="this.$emit('createTask', task)"
          class="w-100 mt-5">
          Создать
        </v-btn>
      </v-card-text>


    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "CreateTaskCard",
  data() {
    return {
      task: {
        name: "",
        type: ""
      },
    }
  },
  updated() {
    this.task = {}
  }
}
</script>

<style scoped>

</style>
