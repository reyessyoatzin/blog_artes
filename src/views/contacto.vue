<template>
  <br>
  <br><br>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Contactanos</h1>
    
    <form @submit.prevent="enviarFormulario">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" id="nombre" v-model="nombre" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="correo" class="form-label">Correo electrónico</label>
        <input type="email" id="correo" v-model="correo" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea id="mensaje" v-model="mensaje" class="form-control" rows="4" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <div v-if="mensajeEnviado" class="alert alert-success mt-3" role="alert">
      ¡Gracias por tu mensaje! Te responderemos pronto.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactoView',
  data() {
    return {
      nombre: '',
      correo: '',
      mensaje: '',
      mensajeEnviado: false
    }
  },
  methods: {
    enviarFormulario() {
      // Aquí podrías enviar los datos a un backend o API
      console.log('Formulario enviado:', {
        nombre: this.nombre,
        correo: this.correo,
        mensaje: this.mensaje
      });

      // Mostrar mensaje de confirmación
      this.mensajeEnviado = true;

      // Limpiar formulario
      this.nombre = '';
      this.correo = '';
      this.mensaje = '';
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
