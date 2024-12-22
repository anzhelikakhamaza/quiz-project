<script setup>
import useQuestionsStore from "@/stores/questions.js";

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  questionTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
});

const questionsStore = useQuestionsStore();

const saveToStorage = (answer) => {
  questionsStore.selectedValue = answer;
  console.log(answer);
}

</script>

<template>
  <div class="quiz-container">
    <div class="quiz-question">
      <h1 class="quiz-question-title">{{ questionTitle }}</h1>
      <p class="quiz-question-subtitle">{{ subTitle }}</p>
    </div>
    <div class="quiz-buttons">
      <button v-for="button in buttons" :key="button" @click="saveToStorage(button)" :class="{'quiz-button--active': button === questionsStore.selectedValue}" class="quiz-button">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<style>
.quiz-container {
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.quiz-question {
  text-align: center;
  margin-bottom: 24px;
}

.quiz-question-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.quiz-question-subtitle {
  color: var(--subtitle-color);
  font-size: 16px;
  margin: 8px 0 0;
}

.quiz-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.quiz-button {
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: var(--option-button-bg-color);
  color: var(--text-color);
  text-align: center;
  transition: background-color 0.3s ease;
}

.quiz-button:hover {
  background-color: var(--option-button-hover-color);
}

.quiz-button--active {
  background-color: var(--option-button-hover-color);
  font-weight: bold;
  border: 2px solid var(--option-button-hover-color);
}
</style>