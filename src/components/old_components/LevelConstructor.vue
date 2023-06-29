<template>
  <v-container class="d-flex flex-column h-screen">
    <v-window v-model="step">

      <v-window-item v-for="roadItem in course.roadMap" v-model="roadItem.number" class="h-100">
        <v-col cols="12" class="h-100">

          <v-label class="text-h4">
            {{ roadItem.name }}
          </v-label>

          <div class="pt-3">
            <v-row class="h-100">
              <v-col cols="4" class="d-flex flex-column" style="gap: 15px">

                <v-col class="justify-space-between h-100 flex-fill">

                  <v-card>
                    <v-list>
                      <v-list-subheader>Список</v-list-subheader>

                      <v-list-item
                        v-for="task in roadItem.tasks"
                        active-color="primary">
                        <div class="d-flex justify-space-between">
                          <div>{{ task.name }}</div>
                          <!--                    <v-icon icon="mdi-pencil"></v-icon>-->
                        </div>

                      </v-list-item>

                    </v-list>
                  </v-card>

                  <v-btn
                    @click="overlay = !overlay"
                    class="w-100 mt-5">
                    Создать урок
                  </v-btn>

                </v-col>

              </v-col>

              <v-col cols="8">

                <CreateTest/>

<!--                <quill-editor-->
<!--                  theme="snow"-->
<!--                  toolbar="essential"-->
<!--                />-->

              </v-col>
            </v-row>
          </div>

        </v-col>
      </v-window-item>

      <create-task-card
        v-model="overlay"
        @createTask="createTask"
      />

    </v-window>

    <div class="d-flex justify-space-between ma-3 align-self-end w-100">
      <div>
        <v-btn
          v-if="step > 0"
          @click="step--"
          text="Назад"
        />
      </div>
      <v-btn
        @click="step++"
        text="Далее"/>
    </div>

  </v-container>
</template>

<script>
import {QuillEditor} from "@vueup/vue-quill";
import CreateTaskCard from "@/components/old_components/CreateTaskCard";
import {store} from "@/store";
import CreateTest from "@/components/old_components/CreateTest";

export default {
  name: "LevelConstructor",
  components: {CreateTest, CreateTaskCard, QuillEditor},
  props: {
    id: {type: String, required: true}
  },
  data() {
    return {
      overlay: false,
      course: {},
      step: 0
    }
  },
  mounted() {
    this.course = store.getters.getCourseById(Number.parseInt(this.id))
    console.log(this.course)
  },
  methods: {
    createTask(task) {
      this.course.roadMap[this.step].tasks.push(task)
      this.overlay = false
    }
  }
}
</script>

<style scoped>

</style>
