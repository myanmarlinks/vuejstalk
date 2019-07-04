import UserList from "./UserList.vue";
import UserDetail from "./UserDetail.vue";
import VueDirective from "../VueDirectives.vue";

export const userRoutes = [
    {
        path: "/",
        name: "user-list",
        component: UserList,
    },
    {
        path: '/user-detail',
        name: "user-detail",
        component: UserDetail,
    },
    {
        path: '/vue-directives',
        name: 'directives',
        component: VueDirective
    }
];