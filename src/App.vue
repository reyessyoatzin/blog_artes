<template>
  <div id="app">
    <Header />
    <home-page />
    <HelloWorld/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue';
import homePage from './views/home-page.vue'
import Footer from './components/Footer.vue'


export default {
  components: {
    Header,
    homePage,
    HelloWorld,
    Footer,
  }
}
</script>

<style>
/* Opcional: estilos globales */
</style>

