<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});

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
        <button class="step-back-button" @click="onClickPreviousButton">
          &lt;
        </button>
        <div class="step-page-indicator">
          <span class="step-current-page">{{ currentPage }}</span>/5
        </div>
      </div>
      <div class="step-progress-bar">
        <div
            class="step-progress-bar-fill"
            :style="{ width: `${(currentPage / 5) * 100}%` }"
        ></div>
      </div>
    </header>

    <slot></slot>

    <button class="step-next-button" @click="onClickStepButton" :disabled='isDisabled'>
      Next
    </button>
  </div>
</template>

<style scoped>
.step-container {
  width: 375px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #1f002b;
  color: white;
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
  color: #e4229c;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.step-back-button:hover {
  transform: scale(1.1);
}

.step-page-indicator {
  font-size: 16px;
  color: #e8eaf2;
  display: flex;
  align-items: center;
}

.step-current-page {
  color: #e4229c;
  font-weight: bold;
}

.step-progress-bar {
  width: 100%;
  height: 4px;
  background-color: #e8eaf2;
  border-radius: 2px;
  overflow: hidden;
}

.step-progress-bar-fill {
  height: 4px;
  background-color: #e4229c;
  transition: width 0.3s ease;
}

/* Кнопка Next */
.step-next-button {
  width: 100%;
  padding: 16px;
  background-color: #e4229c;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.step-next-button:hover {
  background-color: #bf1b84;
}

/* Адаптивность */
@media (min-width: 576px) {
  .step-container {
    max-width: 500px;
    padding: 30px;
  }

  .step-next-button {
    font-size: 18px;
    padding: 18px;
  }
}

@media (min-width: 768px) {
  .step-container {
    max-width: 600px;
  }

  .step-page-indicator {
    font-size: 18px;
  }

  .step-next-button {
    font-size: 20px;
    padding: 20px;
  }
}
</style>