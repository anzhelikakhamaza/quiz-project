<script setup>
import { useRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import { useQuestionsStore } from '@/stores/questions.js'

const router = useRouter();

const currentPage = 5;
const totalPages = 5;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[4]?.question || "";
const subTitle = questionsStore.questions[4]?.subtitle || "";

const bookCons = ['Werewolf', 'Action', 'Royal Obsession', 'Billionaire', 'Romance', 'Young Adult', 'Bad Boy'];

const chooseAgeGap = () => {
  router.push('/email-verification')
}

const getBackToPreviousPage = () => {
  router.push('/book-preferences')
}

</script>

<template>
  <MainComponent :currentPage="currentPage" :totalPages="totalPages" :getBackToPreviousPage="getBackToPreviousPage"
                 :questionTitle="questionTitle" :subTitle="subTitle" :buttons="bookCons"
                 :onClick="chooseAgeGap"/>
</template>

<style scoped>

</style>/