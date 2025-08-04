<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">

        <!-- Logo y nombre -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="/logo.png" alt="Logo" class="logo me-2" />
        Blog_Artes
      </router-link>
      <!-- Menú -->
     <ul class="navbar-nav ms-auto">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Inicio</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/quienesomos">Quiénes Somos</router-link>
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
<style>
.logo {
    height: 40px;   /* Puedes ajustar el alto */
  width: auto;    /* Mantiene la proporción */
  max-height: 40px;
}
.container {
  background-color: #ff69b4; /* rosa fuerte */
  color: white;
}

.custom-navbar .nav-link {
  color: white;
}

.custom-navbar .nav-link:hover {
  color: #ffe6f0;
}
</style>







