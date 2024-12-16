<script setup>
import MainComponent from "@/components/QuestionTemplate.vue";
import { useQuestionsStore } from "@/stores/questions.js";

const currentPage = 4;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[3]?.question || "";
const subTitle = questionsStore.questions[3]?.subtitle || "";
const bookCons = questionsStore.questions[1]?.answers || "";
</script>

<template>
  <MainComponent
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="bookCons"
  />
</template>

<style scoped></style>
/