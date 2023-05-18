import { createWebHistory, createRouter } from 'vue-router'
import LoginView from "../components/LoginView.vue"
import MainView from "../components/MainView.vue"
import ItemView from "../components/ItemView.vue"
import HelloView from "../components/HelloView.vue"
const history = createWebHistory()
const myRouter = createRouter({
    history, // 路由模式
    routes: [{
        path: "/",
        redirect: "/main"
    }, {
        path: "/login",
        component: LoginView,
        name: "LoginView",
    }, {
        path: "/main",
        component: MainView,
        name: "MainView",
        children: [{
            path: "/main/item",
            component: ItemView,
            name: "ItemView",
        }, {
            path: "/main/hello",
            component: HelloView,
            name: "HelloView",
        }]
    }, ]
})
export default myRouter;