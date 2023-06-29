<template>
  <v-container fluid class="question-component" style="overflow: auto">
    <v-expansion-panels>
      <v-expansion-panel v-for="quest in questions" :key="quest.number">

        <v-expansion-panel-title>
          {{ quest.number }}. {{ quest.question }}
        </v-expansion-panel-title>

        <v-expansion-panel-text>

          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Вопрос"
                v-model="quest.question"
                outlined
                required
                variant="solo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row
            v-for="(answer, index) in quest.answers"
            :key="answer"
            class="w-100 pa-0 ma-0"
          >

            <v-col cols="10" class="pa-0">
              <v-text-field
                v-model="answer.text"
                :label="`Ответ ${index + 1}`"
                outlined
                required
                variant="solo"
              ></v-text-field>
            </v-col>

            <v-col cols="2" class="">
              <v-btn
                density="comfortable"
                icon="mdi-delete"
                color="error"
                small
                class="pa-0"
                @click="removeAnswer(quest.answers, index)"
                v-show="quest.answers.length > 2"
              />

              <v-btn
                density="comfortable"
                icon="mdi-check"
                :class="[{ 'bg-green': answer.correct }, {'bg-grey': !answer.correct }]"
                small
                class="ml-3"
                @click="makeCorrect(quest.answers, index)"
              />

            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-btn color="primary" @click="addAnswer(quest.answers)">Добавить вариант ответа</v-btn>
            </v-col>
          </v-row>

        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-btn
        class="mt-5"
        @click="addQuestion"
      >
        Добавить вопрос
      </v-btn>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: "CreateTest",
  data() {
    return {
      questions: [
        {
          question: "",
          number: 1,
          answers: [{text: '', correct: true}, {text: '', correct: false}]
        }
      ],
    }
  },
  methods: {
    addAnswer(arr) {
      arr.push({text: '', correct: false});
    },
    removeAnswer(arr, index) {
      arr.splice(index, 1);
    },
    makeCorrect(arr, index) {
      arr.forEach((answer, i) => {
        answer.correct = i === index;
      });
    },
    addQuestion() {
      this.questions.push({
        question: "",
        number: this.questions.length + 1,
        answers: [{text: '', correct: true}, {text: '', correct: false}]
      })
    }
  }
}
</script>

<style scoped>
.question-component {
  padding: 20px;
}
</style>
