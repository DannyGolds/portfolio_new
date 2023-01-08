<template>
  <div class="wrapper">
    <header-page></header-page>
    <router-view/>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
export default {
  name: 'App',
  components: {HeaderPage, FooterPage}
}
</script>