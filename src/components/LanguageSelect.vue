<script setup>
import { useRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import { useQuestionsStore } from '@/stores/questions.js'

const router = useRouter();

const currentPage = 1;
const totalPages = 5;

const questionsStore = useQuestionsStore();
const questionTitle = questionsStore.questions[0]?.question || "";
const subTitle = questionsStore.questions[0]?.subtitle || "";

const languageSelect = ['English', 'French', 'German', 'Spanish'];

const chooseAgeGap = () => {
  router.push('/gender-select')
}



</script>

<template>
  <MainComponent :currentPage="currentPage" :totalPages="totalPages"
                 :questionTitle="questionTitle" :subTitle="subTitle" :buttons="languageSelect"
                 :onClick="chooseAgeGap"/>
</template>

<style scoped>

</style>/