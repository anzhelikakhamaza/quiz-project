<script setup>
import QuestionTemplate from "@/components/QuestionTemplate.vue";
import { useQuestionsStore } from "@/stores/questions.js";

const currentPage = 2;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[1]?.question || "";
const subTitle = questionsStore.questions[1]?.subtitle || "";
const genderSelect = questionsStore.questions[1]?.answers || "";
</script>

<template>
  <QuestionTemplate
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="genderSelect"
  />
</template>

<style scoped></style>