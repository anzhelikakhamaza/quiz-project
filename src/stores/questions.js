import { defineStore } from "pinia";

export const useQuestionsStore = defineStore('questions',{
    state: () => ({
    questions: [{id: 1, question: "What is your preferred language?", subtitle: "Choose language"},
    {id: 2, question: "What gender do you identify with?", subtitle: "Please share how do you identify yourself"},
    {id: 3, question: "What is your age?", subtitle: ""},
    {id: 4, question: "What do you hate the most in a book?", subtitle: ""},
    {id: 5, question: "What are your favorite topics?", subtitle: "Choose up to 3 topics you like"},
        ],
    }),
});

export default useQuestionsStore;