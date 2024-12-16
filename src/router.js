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
    { path: '/', redirect: '/language-select' },
    { path: '/language-select', name: 'LanguageSelect', component: LanguageSelect },
    { path: '/gender-select', name: 'GenderSelect', component: GenderSelect },
    { path: '/age-select', name: 'AgeSelect', component: AgeSelect },
    { path: '/book-preferences', name: 'BookPreferences', component: BookPreferences },
    { path: '/favorite-topics', name: 'FavoriteTopics', component: FavoriteTopics },
    { path: '/circle-loader', name: 'CircleLoader', component: CircleLoader },
    { path: '/email-verification', name: 'EmailVerification', component: EmailVerification },
    { path: '/thank-you-page', name: 'ThankYou', component: ThankYou },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;