import Vue from 'vue'
import Router from 'vue-router'
import Msite from "../packages/Msite/Msite";
import Order from "../packages/Order/Order";
import Search from "../packages/Search/Search";
import Profile from "../packages/Profile/Profile";
import Login from "../packages/Login/Login";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {showRooter: true}
        },
        {
            path: '/order',
            component: Order,
            meta: {showRooter: true}
        },
        {
            path: '/search',
            component: Search,
            meta: {showRooter: true}
        },
        {
            path: '/profile',
            component: Profile,
            meta: {showRooter: true}
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: 'msite'
        }
    ]
})