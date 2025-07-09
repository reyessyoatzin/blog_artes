<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Blog_Artes</router-link>

      <!-- Menú -->
      <ul class="navbar-nav ms-auto"> 
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/quienes-somos">Quiénes Somos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/categorias">Categorías</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>




