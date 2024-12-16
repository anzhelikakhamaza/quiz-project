import { defineStore } from "pinia";

export const useQuestionsStore = defineStore("questions", {
    state: () => ({
        questions: [
            {
                id: 1,
                question: "What is your preferred language?",
                subtitle: "Choose language",
                answers: ["English", "French", "German", "Spanish"],
                selectedValue: ""
            },
            {
                id: 2,
                question: "What gender do you identify with?",
                subtitle: "Please share how do you identify yourself",
                answers: ["Female", "Male", "Other"],
                selectedValue: ""
            },
            {
                id: 3,
                question: "What is your age?",
                subtitle: "",
                answers: ["18-29 year", "30-39 years", "40-49 years", "50+"],
                selectedValue: ""
            },
            {
                id: 4,
                question: "What do you hate the most in a book?",
                subtitle: "",
                answers: [
                    "Lack of logic",
                    "A slow speed",
                    "Lack of humor",
                    "Way too generic ending",
                ],
                selectedValue: ""
            },
            {
                id: 5,
                question: "What are your favorite topics?",
                subtitle: "Choose up to 3 topics you like",
                answers: [
                    "Werewolf",
                    "Action",
                    "Royal Obsession",
                    "Billionaire",
                    "Romance",
                    "Young Adult",
                    "Bad Boy",
                ],
                selectedValue: ""
            },
        ],
    }),
});

export default useQuestionsStore;