<script setup>
import QuestionTemplate from "@/components/QuestionTemplate.vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
})

</script>

<template>
  <QuestionTemplate :currentPage="currentPage"/>
</template>

<style scoped></style>