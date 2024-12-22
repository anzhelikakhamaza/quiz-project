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

</style>