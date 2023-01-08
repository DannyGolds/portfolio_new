<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <button class="header__burger" @click="toggleSideBar">
                    <span></span>
                </button>
                <nav class="header__nav">
                    <router-link v-for="link in links" :key="link" :to="link.path" class="header__link"> <img :src="link.src" alt=""> {{link.title}}</router-link>
                </nav>
                <button class="header__btn">
                    <img src="@/assets/imgs/auth.svg" alt="icon sign-in">
                </button>
                <side-bar :state="panelState"></side-bar>
            </div>
        </div>
    </header>
</template>

<script>
import SideBar from './SideBar.vue'
export default {
    name: 'HeaderPage',
    components: {SideBar},
    data() {
        return {
            links: [
                {path: '/', title: 'Главная', src: require("@/assets/imgs/Layer 3.svg")},
                {path: '/about', title: 'Обо мне', src: require("@/assets/imgs/About.svg")},
                {path: '/portfolio', title: 'Портфолио', src: require("@/assets/imgs/Layer 2.svg")},
                {path: '/blog', title: 'Блог', src: require("@/assets/imgs/Vector.svg")},
                {path: '/tools', title: 'Инструменты', src: require("@/assets/imgs/Frame.svg")},
                {path: '/contacts', title: 'Контакты', src: require("@/assets/imgs/telegram social media network chat.svg")},
            ],
            panelState: 'hidden'
        }
    },
    methods: {
        toggleSideBar() {
            this.panelState == 'hidden' ? this.panelState = 'active' : this.panelState = 'hidden'
        }
    }
}
</script>