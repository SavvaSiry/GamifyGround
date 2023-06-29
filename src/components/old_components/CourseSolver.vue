<template>

  <v-app-bar
    density="comfortable"
    :elevation="1"
  >

    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="active = !active"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <span class="text-grey">Собеседование Java </span>
      <span>/ Основная часть</span>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn
        prepend-icon="mdi-star-circle"
        variant="plain"
        size="large"
        class="pa-0"
      >
        100
      </v-btn>

      <v-btn
        prepend-icon="mdi-fire"
        variant="plain"
        size="large"
        class="pa-0"
      >
        12
      </v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>

  <v-layout>
    <v-navigation-drawer
      permanent
      v-model="active"
    >
      <v-list>

        <v-list-group
          v-for="item in course.roadMap"
          :key="item.name"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.name"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="ex in item.tasks"
            :key="ex.name + item.name"
            :value="ex.name + item.name"
            :title="ex.name"
            :append-icon="ex.icon"
          ></v-list-item>
        </v-list-group>

      </v-list>

    </v-navigation-drawer>

    <v-main style="max-height: 93vh; overflow: auto">

<!--      <text-test/>-->
      <test-test/>
    </v-main>

    <v-bottom-navigation absolute="true" density="comfortable">
      <v-btn value="recent" class="justify-end">
        Далее заключение
      </v-btn>
    </v-bottom-navigation>

  </v-layout>

</template>

<script>
import TextTest from "@/components/old_components/TextTest";
import TestTest from "@/components/old_components/TestTest";
export default {
  name: "CourseSolver",
  components: {TestTest, TextTest},
  data() {
    return {
      active: false,
      course: {
        id: 11,
        courseName: "",
        shortDescription: "",
        skills: [{name: "Test"}, {name: "Test"}],
        roadMap: [
          {
            number: 0,
            name: "Java SE",
            theoreticalSkills: "",
            practicalSkills: "",
            props: false,
            tasks: [{name: "Вступление", icon: "mdi-text-box-outline"}, {
              name: "Основная часть",
              icon: "mdi-pencil"
            }, {name: "Заключение", icon: "mdi-pencil"}],
          },
          {
            number: 1,
            name: "Java EE",
            theoreticalSkills: "",
            practicalSkills: "",
            props: false,
            tasks: [{name: "Вступление", icon: "mdi-text-box-outline"}],
          }
        ]
      }
    }
  },
}
</script>

<style scoped>

</style>
