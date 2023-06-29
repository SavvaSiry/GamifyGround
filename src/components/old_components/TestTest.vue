<template>
  <v-container fluid class="test-component" style="height: 100vh;">
    <v-row>
      <v-col cols="9">

        <div class="text-left text-h4 mb-5">
          {{ currentQuestionNumber }}
          <span class="text-grey mr-5">/ {{ questions.length }}</span>
          <span class="text-h5">
            Какое значение по умолчанию имеет булева переменная в Java?
          </span>
        </div>

        <v-row>

          <v-col cols="6" v-for="(option, index) in currentAnswerOptions" :key="index">
            <v-card
              outlined
              :class="{ 'option-card': true, 'option-selected': selectedAnswer === option }"
              @click="selectAnswer(option)"
            >
              <v-card-text>{{ option }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="navigation-buttons">
          <v-btn @click="previousQuestion">Назад</v-btn>
          <v-btn @click="nextQuestion">Далее</v-btn>
        </div>
      </v-col>

      <v-col cols="3">
        <div>
          <div style="display: grid; gap: 5%; row-gap: 10%; grid-template-columns: repeat(4, 1fr)">

            <v-btn
              v-for="(question, index) in questions"
              :key="index"
              class="text-h6 "
              :class="[{ 'question-answered': answeredQuestions.includes(question) }, { 'question-selected': index + 1 === currentQuestionNumber } ]"
              @click="goToQuestion(index)"
              size="small"
              height="50"
            >
              {{ index + 1 }}
            </v-btn>

          </div>
        </div>


        <v-row align="center" justify="center" class="questions-list">

        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TestTest",
  data() {
    return {
      currentQuestionNumber: 1,
      currentQuestion: "What is your question?",
      currentAnswerOptions: ["true", "false", "null", "0"],
      selectedAnswer: null,
      questions: [
        {number: 1, answered: false},
        {number: 2, answered: true},
        {number: 3, answered: false},
        {number: 4, answered: false},
        {number: 5, answered: false},
      ]
    };
  },
  computed: {
    answeredQuestions() {
      return this.questions.filter(question => question.answered).map(question => question.number);
    }
  },
  methods: {
    selectAnswer(option) {
      this.selectedAnswer = option;
      this.questions[this.currentQuestionNumber - 1].answered = true;
      // Handle the selected answer
      console.log("Selected answer:", option);
    },
    goToQuestion(index) {
      this.currentQuestionNumber = this.questions[index].number;
      this.currentQuestion = "Question " + this.currentQuestionNumber;
      this.currentAnswerOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
      this.selectedAnswer = null;
    },
    previousQuestion() {
      if (this.currentQuestionNumber > 1) {
        this.currentQuestionNumber--;
        this.currentQuestion = "Question " + this.currentQuestionNumber;
        this.currentAnswerOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
        this.selectedAnswer = null;
      }
    },
    nextQuestion() {
      if (this.currentQuestionNumber < this.questions.length) {
        this.currentQuestionNumber++;
        this.currentQuestion = "Question " + this.currentQuestionNumber;
        this.currentAnswerOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
        this.selectedAnswer = null;
      }
    }
  }
};
</script>

<style scoped>
.test-component {
  background-color: #f0f0f0;
  padding: 20px;
}

.option-card {
  cursor: pointer;
}

.option-selected {
  background-color: lightgreen;
}

.questions-list {
  height: 100%;
}

.question-icon {
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 12px;
}

.question-answered {
  color: green;
}

.question-selected {
  background: rgba(5, 70, 232, 0.98);
  color: #f0f0f0;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
