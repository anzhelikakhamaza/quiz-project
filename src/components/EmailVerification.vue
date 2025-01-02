<script setup>
import { ref } from "vue";

const email = ref(null);
const errorMessage = ref(null);

const validateForm = () => {
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    errorMessage.value = "Please enter a valid email address. Example: email@mail.com";
    return false;
  } else {
    errorMessage.value = null;
    return true;
  }
};
</script>

<template>
  <div class="email-container">
    <div class="email-row">
      <div class="email">
        <h1 class="email-title">Email</h1>
        <p class="email-subtitle">Enter your email to get full access</p>
      </div>

      <input
          class="email-input"
          v-model="email"
          type="email"
          placeholder="Your email"
          required
      />

      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>

      <p class="policy">
        By continuing I agree with
        <a href="#" class="link">Privacy policy</a> and
        <br/>
        <a href="#" class="link">Terms of use</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
.email-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;

  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.email-row {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.email {
  text-align: center;
}

.email-title{
  font-size: 30px;
  margin-bottom: 4px;
  font-weight: bold;
  color: var(--text-color);
}

.email-subtitle {
  font-size: 16px;
  color: var(--subtitle-color);
  margin: 0;
}

.email-input {
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  color: var(--text-color);
  border: none;
  border-radius: 12px;
  background-color: var(--option-button-bg-color);
  outline: none;
}

.email-input:focus {
  border: 2px solid var(--button-color);
  box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.2);
}

.error-message {
  color: #ff4d4f;
  font-size: 14px;
  margin-top: -8px;
  text-align: center;
  line-height: 1.4;
}

.policy {
  font-size: 14px;
  color: var(--subtitle-color);
  text-align: center;
  line-height: 1.4;
}

.link {
  color: var(--button-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--button-hover-color);
  text-decoration: underline;
}
</style>