<script setup>
import {computed} from "vue";
import '@/assets/base.css';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPage: {
    type: Number,
    required: true,
  },
  isHeaderHidden: {
    type: Boolean,
    default: false,
  },
  isNextButtonHidden: {
    type: Boolean,
    default: false,
  }
});

const isHidden = computed(() => props.currentPage < 2);
const progressBarIndex = computed(() => `${(props.currentPage / props.totalPage) * 100}%`);

const emit = defineEmits(["nextStepButton", "previousStepButton"]);

const onClickStepButton = () => {
  emit("nextStepButton");
};

const onClickPreviousButton = () => {
  emit("previousStepButton");
};
</script>

<template>
  <div class="step-container">
    <header v-if="!isHeaderHidden" class="step-header">
      <div class="step-header-wrapper">
        <div class="step-header-button-wrapper">
          <button v-if="!isHidden" class="step-back-button"  @click="onClickPreviousButton">
            <img src="@/img/previousIcon.svg" alt="previous icon" class="button-icon" />
          </button>
        </div>
        <div class="step-page-indicator">
          <span class="step-current-page">{{ currentPage }}</span>/{{ totalPage }}
        </div>
      </div>
      <div class="step-progress-bar" >
        <div
            class="step-progress-bar-fill"
            :style="{width: progressBarIndex}"
        ></div>
      </div>
    </header>

    <slot></slot>

    <button v-if="!isNextButtonHidden" class="step-next-button" @click="onClickStepButton">
      Next
    </button>
  </div>
</template>

<style>
.step-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 16px;
}

.step-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.step-header-button-wrapper {
  display: flex;
  align-items: center;
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

.button-icon {
  width: 24px;
  height: 24px;
}

.step-page-indicator {
  font-size: 16px;
  color: var(--indicator-text-color);
  display: flex;
  align-items: center;
  font-weight: 500;
}

.step-current-page {
  color: var(--button-color);
  font-weight: bold;
}

.step-progress-bar {
  width: 100%;
  height: 6px;
  background-color: var(--progress-bar-bg);
  border-radius: 4px;
  overflow: hidden;
}

.step-progress-bar-fill {
  height: 6px;
  background-color: var(--progress-bar-fill);
  transition: width 0.3s ease;
}

.step-next-button {
  width: 100%;
  padding: 16px;
  background-color: var(--button-color);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.step-next-button:hover {
  background-color: var(--button-hover-color);
  transform: scale(1.02);
}
</style>