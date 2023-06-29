<template>
  <v-container class="d-flex flex-column h-screen">

    <div class="w-100 d-flex h-100">
      <v-col cols="4" class="h-100">
        <v-label class="text-h4">
          Общие сведения
        </v-label>

        <v-banner-text>Название курса</v-banner-text>
        <v-text-field
          v-model="course.courseName"
          variant="outlined"
          clearable/>

        <v-banner-text>Краткое описание</v-banner-text>
        <v-textarea
          v-model="course.shortDescription"
          variant="outlined"
          clearable
          max-rows="5"
        />

        <div>
          <v-banner-text>Какие навыки развивает</v-banner-text>
          <v-text-field
            class="mt-3"
            v-model="skill"
            variant="outlined"
            label="Введите навык"
            append-inner-icon="mdi-plus"
            @click:append-inner="addSkill()"
            clearable/>

          <v-chip
            v-for="skill in course.skills"
            class="ma-2"
            closable
          >
            {{ skill.name }}
          </v-chip>

        </div>

      </v-col>

      <!--          <v-divider class="border-opacity-100 ml-5 mr-5" vertical></v-divider>-->

      <v-col cols="8" class="h-100">
        <v-label class="text-h4">
          Дорожная карта
        </v-label>

        <v-expansion-panels class="mt-5">
          <road-map-item
            v-for="roadItem in course.roadMap"
            :key="roadItem.number"
            :item="roadItem"
          />
        </v-expansion-panels>

      </v-col>
    </div>

    <div class="d-flex justify-space-between ma-3 align-self-end w-100">
      <div>
        <v-btn
          v-if="step > 1"
          @click="back"
          text="Назад"
        />
      </div>
      <v-btn
        @click="next"
        text="Вперед"/>
    </div>
  </v-container>
</template>

<script>
import RoadMapItem from "@/components/old_components/RoadMapItem";
import {mapGetters} from 'vuex'
import {store} from "@/store";
import LevalConstructor from "@/components/old_components/LevelConstructor";

export default {
  name: "CourseConstructor",
  components: {LevalConstructor, RoadMapItem},
  data() {
    return {
      course: {},
      step: 1,
      skill: ""
    }
  },
  computed: {
    ...mapGetters(['getCourseById'])
  },
  mounted() {
    this.course = this.getCourseById(11)
    console.log(this.course)
  },
  methods: {
    back() {
      store.dispatch('saveCourse', this.course)
      this.step -= 1;
    },
    next() {
      store.dispatch('saveCourse', this.course)
      this.$router.push('/levels/' + this.course.id)
      // this.step += 1;
      // console.log(this.step)
    },
    addSkill() {
      this.course.skills.push({name: this.skill})
      this.skill = ""
    }
  }
}
</script>

<style scoped>

</style>
