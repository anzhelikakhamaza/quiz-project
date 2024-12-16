<script setup>
import { ref } from "vue";

import Stepper from "./components/Stepper.vue";
import LanguageSelect from "./components/LanguageSelect.vue";
import { computed } from "vue";
import GenderSelect from "./components/GenderSelect.vue";
import AgeSelect from "./components/AgeSelect.vue";
import BookPreferences from "./components/BookPreferences.vue";
import FavoriteTopics from "./components/FavoriteTopics.vue";

const pageObject = {
  1: LanguageSelect,
  2: GenderSelect,
  3: AgeSelect,
  4: BookPreferences,
  5: FavoriteTopics,
};

const currentPage = ref(1);

const getQuestionsComponent = () => {
  return pageObject[currentPage.value];
};

const nextStepButton = () => {
  if (currentPage.value < 5) {
    currentPage.value++;
  }
};

const PreviousStepButton = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<template>
  <Stepper
    @nextStepButton="nextStepButton"
    @PreviousStepButton="PreviousStepButton"
    :currentPage="currentPage"
  >
    <component :is="getQuestionsComponent()" />
  </Stepper>
</template>

<style scoped></style>
