<script setup>
import MainComponent from "@/components/QuestionTemplate.vue";
import { useQuestionsStore } from "@/stores/questions.js";

const currentPage = 1;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[0]?.question || "";
const subTitle = questionsStore.questions[0]?.subtitle || "";
const languageSelect = questionsStore.questions[0]?.answers || "";
</script>

<template>
  <MainComponent
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="languageSelect"
  />
</template>

<style scoped></style>
/