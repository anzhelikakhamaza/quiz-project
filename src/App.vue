<script setup>
import {computed, ref} from "vue";

import Stepper from "./components/Stepper.vue";
import LanguageSelect from "./components/LanguageSelect.vue";
import GenderSelect from "./components/GenderSelect.vue";
import AgeSelect from "./components/AgeSelect.vue";
import BookPreferences from "./components/BookPreferences.vue";
import FavoriteTopics from "./components/FavoriteTopics.vue";
import CircleLoader from "@/components/CircleLoader.vue";
import EmailVerification from "@/components/EmailVerification.vue";

const pageObject = {
  1: LanguageSelect,
  2: GenderSelect,
  3: AgeSelect,
  4: BookPreferences,
  5: FavoriteTopics,
  6: CircleLoader,
  7: EmailVerification
};

const currentPage = ref(1);
const totalPage = ref(7);

const getQuestionsComponent = () => {
  return pageObject[currentPage.value];
};

const nextStepButton = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value++;
  }
};

const previousStepButton = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const handleProgressComplete = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value++;
  }
};

const isHeaderHidden = computed(() => currentPage.value > 5);

const isNextButtonHidden = computed(() => currentPage.value === 6);
</script>

<template>
  <div class="quiz-page">
    <Stepper
      @nextStepButton="nextStepButton"
      @PreviousStepButton="previousStepButton"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :isHeaderHidden="isHeaderHidden"
      :isNextButtonHidden="isNextButtonHidden"
    >

      <component :is="getQuestionsComponent()" :currentPage="currentPage" @progressComplete="handleProgressComplete"/>
    </Stepper>
  </div>
</template>

<style scoped>
.quiz-page {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}
</style>