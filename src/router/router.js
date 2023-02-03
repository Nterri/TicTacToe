import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/TicTacToe/dist/',
        component: Main
    },
    {
        path: '/TicTacToe/dist/:pathMatch(.*)*',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;