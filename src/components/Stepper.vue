<script setup>
import {computed} from "vue";

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});

// const isHidden = computed(() => currentPage < 2);
//
// const progressBarIndex = computed(() => `${(currentPage / 5) * 100}%`);

const emit = defineEmits(["nextStepButton", "PreviousStepButton"]);

const onClickStepButton = () => {
  emit("nextStepButton");
};

const onClickPreviousButton = () => {
  emit("PreviousStepButton");
};
</script>

<template>
  <div class="step-container">
    <header class="step-header">
      <div class="step-header-wrapper">
        <button v-if="!isHidden" class="step-back-button" :style="{width: progressBarIndex}" @click="onClickPreviousButton">
          <img src="@/img/previousIcon.svg" alt="previous icon" class="button-icon" />
        </button>
        <div class="step-page-indicator">
          <span class="step-current-page">{{ currentPage }}</span>/5
        </div>
      </div>
      <div class="step-progress-bar">
        <div
            class="step-progress-bar-fill"
        ></div>
      </div>
    </header>

    <slot></slot>

    <button class="step-next-button" @click="onClickStepButton">
      Next
    </button>
  </div>
</template>

<style>
:root {
  --background-color: #1f002b;
  --text-color: white;
  --button-color: #e4229c;
  --button-hover-color: #bf1b84;
  --progress-bar-bg: #e8eaf2;
  --progress-bar-fill: #e4229c;
  --indicator-text-color: #e8eaf2;
}

.step-container {
  width: 100vh;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.step-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.step-back-button {
  background: none;
  border: none;
  color: var(--button-color);
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.step-back-button:hover {
  transform: scale(1.1);
}

.step-page-indicator {
  font-size: 16px;
  color: var(--indicator-text-color);
  display: flex;
  align-items: center;
}

.step-current-page {
  color: var(--button-color);
  font-weight: bold;
}

.step-progress-bar {
  width: 100%;
  height: 4px;
  background-color: var(--progress-bar-bg);
  border-radius: 2px;
  overflow: hidden;
}

.step-progress-bar-fill {
  height: 4px;
  background-color: var(--progress-bar-fill);
  transition: width 0.3s ease;
}

.step-next-button {
  width: 100%;
  padding: 16px;
  background-color: var(--button-color);
  border: none;
  border-radius: 12px;
  color: var(--text-color);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.step-next-button:hover {
  background-color: var(--button-hover-color);
}
</style>