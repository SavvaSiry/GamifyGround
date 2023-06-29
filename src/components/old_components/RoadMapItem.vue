<template>
  <!--  <div class="w-100 h-100 >-->
  <v-expansion-panel>
    <v-expansion-panel-title v-slot="{ open }">
      <v-row no-gutters>
        <v-col cols="4" class="d-flex justify-start">
          {{ item.number + 1 }}. {{ item.name }}
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          {{ item.time }}
        </v-col>
      </v-row>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <v-col>
        <v-banner-text>Название раздела</v-banner-text>
        <v-text-field variant="outlined" v-model="item.name" clearable/>

        <v-banner-text>Теоритические знания</v-banner-text>
        <v-text-field variant="outlined" v-model="item.theoreticalSkills" clearable/>

        <v-banner-text>Практические знания</v-banner-text>
        <v-text-field variant="outlined" v-model="item.practicalSkills" clearable/>

        <v-banner-text>Время прохождения</v-banner-text>
        <v-text-field variant="outlined" v-model="item.time" clearable/>
      </v-col>
    </v-expansion-panel-text>
  </v-expansion-panel>
  <!--  </div>-->
</template>

<script>
export default {
  name: "RoadMapItem",
  props: {
    item: {
      type: Object,
      required: true,
      default: {
        description: "",
        theoreticalSkills: "",
        practicalSkills: ""
      }
    }
  }
}
</script>

<style scoped>

</style>
