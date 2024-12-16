<script setup>
import useQuestionsStore from "@/stores/questions.js";
import {ref} from "vue";

defineProps({
  currentPage: Number,
  questionTitle: String,
  subTitle: String,
  buttons: Array,
  onClick: Function,
  getBackToPreviousPage: Function,
});

const questionsStore = useQuestionsStore();
const selectedValue = ref('')

const saveToLocalStorage = () => {
  selectedValue.value = questionsStore.questions[0]?.selectedValue || "";

  localStorage.setItem('selectedValue', JSON.stringify(selectedValue.value));
  console.log("selectedValue: ", selectedValue.value);
}
</script>

<template>
  <div class="quiz-container">
    <div class="quiz-question">
      <h1 class="quiz-question-title">{{ questionTitle }}</h1>
      <p class="quiz-question-subtitle">{{ subTitle }}</p>
    </div>
    <div class="quiz-buttons">
      <button v-for="button in buttons" :key="button" @click="saveToLocalStorage" class="quiz-button">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  background-color: #1f002b;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
}

.quiz-question {
  text-align: center;
  margin-bottom: 24px;
}

.quiz-question-title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.quiz-question-subtitle {
  color: #c4c8cc;
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
  background-color: #36173d;
  color: white;
  text-align: center;
  transition: background-color 0.3s ease;
}

.quiz-button:hover {
  background-color: #e4229c;
}

@media (min-width: 576px) {
  .quiz-container {
    max-width: 500px;
  }

  .quiz-question-title {
    font-size: 28px;
  }

  .quiz-question-subtitle {
    font-size: 18px;
  }

  .quiz-button {
    font-size: 18px;
    padding: 18px;
  }
}

@media (min-width: 768px) {
  .quiz-container {
    max-width: 600px;
    padding: 40px;
  }

  .quiz-question-title {
    font-size: 32px;
  }

  .quiz-question-subtitle {
    font-size: 20px;
  }

  .quiz-button {
    font-size: 20px;
    padding: 20px;
  }
}
</style>