<script setup>
import MainComponent from "@/components/QuestionTemplate.vue";
import { useQuestionsStore } from "@/stores/questions.js";

const currentPage = 5;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[4]?.question || "";
const subTitle = questionsStore.questions[4]?.subtitle || "";
const bookFav = questionsStore.questions[4]?.answers || "";
</script>

<template>
  <MainComponent
    :currentPage="currentPage"
    :questionTitle="questionTitle"
    :subTitle="subTitle"
    :buttons="bookFav"
  />
</template>

<style scoped></style>
/