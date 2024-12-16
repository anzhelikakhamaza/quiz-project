<script setup>
defineProps({
  currentPage: Number,
  totalPages: Number,
  questionTitle: String,
  subTitle: String,
  buttons: Array,
  onClick: Function,
  getBackToPreviousPage: Function,
    }
)

</script>

<template>
  <div class="container">
    <header>
      <div class="header-sub-wrapper">
        <button class="get-back-to-previous-page" @click="getBackToPreviousPage"> < </button>
        <div class="page-number"><span class="page-one">{{ currentPage }}</span>/ {{ totalPages }}</div>
      </div>
      <div class="progress-bar">
        <div class="progress-bar_result"></div>
      </div>
    </header>
    <div class="page-question">
      <h1> {{ questionTitle }}</h1>
      <p class="page-question-subtitle"> {{ subTitle }}</p>
    </div>
    <div class="language-button">
      <button v-for="button in buttons" @click="onClick">{{ button }}</button>
    </div>
  </div>

</template>

<style scoped>
.container {
  background-color: #1F002B;
  width: 375px;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 26px;
  padding-right: 26px;
}

.header-sub-wrapper {
  display: flex;
  flex-direction: row;
}

.page-number {
  height: 40px;
  display: flex;
  align-items: center;
}

.page-one {
  color: #E4229C;
}

.progress-bar {
  height: 4px;
  background-color: #E8EAF2;
}

.progress-bar_result {
  width: 37px;
  height: 4px;
  background-color: #E4229C;
}

.page-question {
  width: 323px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 45px;
  margin-bottom: 24px;
}

.page-question-subtitle {
  color: #C4C8CC;
}

.language-button {
  color: white;
  display: flex;
  flex-direction: column;
  width: 327px;
  gap: 12px;
  margin-bottom: 134px;
}

button {
  padding: 18px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  background-color: #36173D;
  color: white;
  height: 60px;
  text-align: left;
}
</style>/