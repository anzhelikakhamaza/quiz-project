<script setup>
import MainComponent from "@/components/QuestionTemplate.vue";
import { useQuestionsStore } from "@/stores/questions.js";

const currentPage = 3;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[2]?.question || "";
const subTitle = questionsStore.questions[2]?.subtitle || "";
const ageGap = questionsStore.questions[2]?.answers || "";
</script>

<template>
  <MainComponent
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="ageGap"
  />
</template>

<style scoped></style>
/