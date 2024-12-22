<script setup>
import { useQuestionsStore } from "@/stores/questions.js";
import QuestionTemplate from "@/components/QuestionTemplate.vue";

const currentPage = 3;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[2]?.question || "";
const subTitle = questionsStore.questions[2]?.subtitle || "";
const ageGap = questionsStore.questions[2]?.answers || "";
</script>

<template>
  <QuestionTemplate
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="ageGap"
  />
</template>

<style scoped></style>