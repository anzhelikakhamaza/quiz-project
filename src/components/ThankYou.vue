<script setup>

</script>

<template>
  <div class="thank-you_container">
    <div class="thank-you_header">
      <h1 class="thank-you_title">Thank you</h1>
      <p class="thank-you_subtitle">for supporting us and passing quiz</p>
    </div>

    <div class="thank-you_image-wrapper">
      <img src="@/img/checkmark.png" alt="Checkmark" class="checkmark_icon">
    </div>

    <div class="thank-you_download">
      <img src="@/img/download.png" alt="Download" class="download_icon">
      <p class="thank-you_download-button">Download my answers</p>
      <!-- можна використати плагин vue-json-to-csv? -->
    </div>

    <button class="thank-you_button" @click="handleSubmit">Retake quiz</button>
  </div>
</template>

<style scoped>
.thank-you_container {
  background-color: #1F002B;
  width: 375px;
  height: 649px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0 26px;
}

.thank-you_header {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 62px;
}

.thank-you_title {
  margin: 0;
}

.thank-you_subtitle {
  margin: 0;
}

.thank-you_image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 142px;
}

.checkmark_icon {
  width: 118px;
}

.thank-you_download {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.download_icon {
  width: 42px;
  margin-right: 8px;
}

.thank-you_download-button {
  margin: 0;
}

.thank-you_button {
  padding: 16px;
  border: none;
  border-radius: 50px;
  background-color: #E4229C;
  opacity: 40%;
  margin-top: 29px;
  color: white;
  cursor: pointer;
}

.thank-you_button:hover {
  opacity: 100%;
}
</style>