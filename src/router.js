import VueRouter from 'vue-router';
import { userRoutes } from "./components/user/user.routes";

const routes = [...userRoutes];

const router = new VueRouter({
    routes,
});

export default router;