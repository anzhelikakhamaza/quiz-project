<script setup>
import { useRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import { useQuestionsStore } from '@/stores/questions.js'

const router = useRouter();

const currentPage = 4;
const totalPages = 5;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[3]?.question || "";
const subTitle = questionsStore.questions[3]?.subtitle || "";

const bookCons = ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'];

const chooseAgeGap = () => {
  router.push('/favorite-topics')
}

const getBackToPreviousPage = () => {
  router.push('/age-select')
}

</script>

<template>
  <MainComponent :currentPage="currentPage" :totalPages="totalPages" :getBackToPreviousPage="getBackToPreviousPage"
                 :questionTitle="questionTitle" :subTitle="subTitle" :buttons="bookCons"
                 :onClick="chooseAgeGap"/>
</template>

<style scoped>

</style>/