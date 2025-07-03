<template>
  <div id="app">
    <Header />
    <home-page />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import homePage from './views/home-page.vue'

export default {
  components: {
    Header,
    Footer,
    homePage
  }
}
</script>

<style>
/* Opcional: estilos globales */
</style>

