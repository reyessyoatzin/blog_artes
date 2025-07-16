<template>
  <footer class="fixed-footer bg-dark text-white text-center p-3">
    <small>© 2025 Todos los derechos reservados.</small>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>

.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ff69b4; /* rosa fuerte */
  color: white;
}
</style>
