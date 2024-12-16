<script setup>
  import router from "@/router.js";
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

  const handleSubmit = () => {
    if (validateForm()) {
      router.push('/thank-you-page');
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

    <button @click="handleSubmit">Next</button>
  </div>
</template>

<style scoped>
  .container {
    background-color: #1F002B;
    width: 375px;
    height: 649px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 175px;
    padding-left: 26px;
    padding-right: 26px;
  }

  .email-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 56px;
  }

  .email-input {
    border-radius: 16px;
    border: none;
    background-color: #36173D;
    padding: 26px 20px;
  }

  .policy {
    width: 280px;
    text-align: center;
    align-self: center;
    font-size: 12px;
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: -10px;
  }

  button {
    padding: 16px;
    border: none;
    border-radius: 50px;
    background-color: #E4229C;
    opacity: 40%;
  }

  button:hover {
    background-color: #E4229C;
    opacity: 100%;
  }
</style>