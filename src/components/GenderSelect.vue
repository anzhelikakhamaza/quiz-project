<script setup>
import { useRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import { useQuestionsStore } from '@/stores/questions.js'

const router = useRouter();

const currentPage = 2;
const totalPages = 5;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[1]?.question || "";
const subTitle = questionsStore.questions[1]?.subtitle || "";

const genderSelect = ['Female', 'Male', 'Other'];

const chooseAgeGap = () => {
  router.push('/age-select')
}

const getBackToPreviousPage = () => {
  router.push('/language-select')
}

</script>

<template>
  <MainComponent :currentPage="currentPage" :totalPages="totalPages" :getBackToPreviousPage="getBackToPreviousPage"
                 :questionTitle="questionTitle" :subTitle="subTitle" :buttons="genderSelect"
                 :onClick="chooseAgeGap"/>
</template>

<style scoped>

</style>/