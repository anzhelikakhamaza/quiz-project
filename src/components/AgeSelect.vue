<script setup>
import { useRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import { useQuestionsStore } from '@/stores/questions.js'

const router = useRouter();

const currentPage = 3;
const totalPages = 5;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[2]?.question || "";
const subTitle = questionsStore.questions[2]?.subtitle || "";

const ageGap = ['18-29 year', '30-39 years', '40-49 years', '50+'];

const chooseAgeGap = () => {
  router.push('/book-preferences')
}

const getBackToPreviousPage = () => {
  router.push('/gender-select')
}

</script>

<template>
  <MainComponent :currentPage="currentPage" :totalPages="totalPages" :getBackToPreviousPage="getBackToPreviousPage"
                 :questionTitle="questionTitle" :subTitle="subTitle" :buttons="ageGap"
                 :onClick="chooseAgeGap"/>
</template>

<style scoped>

</style>/