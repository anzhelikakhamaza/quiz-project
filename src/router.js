import { createRouter, createWebHistory } from "vue-router";
import LanguageSelect from "@/components/LanguageSelect.vue";
import GenderSelect from "@/components/GenderSelect.vue";
import AgeSelect from "@/components/AgeSelect.vue";
import BookPreferences from "@/components/BookPreferences.vue";
import FavoriteTopics from "@/components/FavoriteTopics.vue";
import CircleLoader from "@/components/CircleLoader.vue";
import EmailVerification from "@/components/EmailVerification.vue";
import ThankYou from "@/components/ThankYou.vue";

const routes = [
    { path: '/', },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;