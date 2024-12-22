<script setup>
  import {ref} from "vue";

  const email = ref(null);
  let errorMessage = ref(null);

  const validateForm = () => {
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      errorMessage.value = "Please enter a valid email address. Example: email@mail.com";
      return false;
    } else {
      errorMessage.value = null;
      return true;
    }
  }
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="email-title">
        <h1>Email</h1>
        <p>Enter your email to get full access</p>
      </div>
      <input class="email-input" v-model="email" type="email" placeholder="Your email" required>
      <p class="error-message" v-if="errorMessage"> {{ errorMessage }}</p>
      <p class="policy">By continuing I agree with <a>Privacy policy</a> and <br><a>Terms of use</a>.</p>
    </div>

    <!-- <button @click="handleSubmit">Next</button> -->
  </div>
</template>

<style scoped>

</style>