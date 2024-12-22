<script setup>
import { useQuestionsStore } from "@/stores/questions.js";
import QuestionTemplate from "@/components/QuestionTemplate.vue";

const currentPage = 4;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[3]?.question || "";
const subTitle = questionsStore.questions[3]?.subtitle || "";
const bookCons = questionsStore.questions[3]?.answers || "";
</script>

<template>
  <QuestionTemplate
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="bookCons"
  />
</template>

<style scoped></style>