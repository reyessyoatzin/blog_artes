<!-- src/views/ProductDetail.vue -->
 <!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="product-detail">
    <img :src="product.image" :alt="product.name" class="product-img" />
    <div class="info">
      <h1>{{ product.name }}</h1>
      <p class="price">${{ product.price }}</p>
      <p class="description">{{ product.description }}</p>

      <router-link :to="'/'" class="btn-back">← Volver a Inicio</router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    const productId = this.$route.params.id

    // Aquí podrías hacer una solicitud a una API real
    const allProducts = [
      {
        id: '1',
        name: 'morral bordado',
        price: 120,
        image: 'https://tienda.hechoenveracruz.gob.mx/wp-content/uploads/2023/01/bolsita-mediana.jpg',
        description: 'Morral tradiconal con bordado tipico de durango.'
      },
      {
        id: '2',
        name: 'Sobrero de soyate',
        price: 250,
        image: 'https://www.amigosmap.org.mx/wp-content/uploads/2022/03/DURANGO5.jpg',
        description: 'sombrero tipico de los odam hecho de soyate .'
      },
      {
        id: '3',
        name: 'pulsera de chaquira',
        price: 180,
        image: 'https://www.artesanum.com/content/upi/6/26036/4/252ed88bb6dbc4ae.jpg',
        description: 'Pulcera hecho 100% de chaquira con formas.'
      },
      {
        id: '4',
        name: 'Traje tipico de mujer',
        price: 180,
        image: 'https://tecolotito.elsiglodedurango.com.mx/i/2021/03/961533.jpeg',
        description: 'Este traje es originario del pueblo santiego teneraca, usan colores llamativos como verde, anaranjado entre otras .'
      },
      {
        id: '5',
        name: 'servilleta',
        price: 180,
        image: 'https://http2.mlstatic.com/D_NQ_NP_724820-MLM45677710588_042021-F.jpg',
        description: 'servilletas decorados con diferentes estilos y colores de estambres.'
      },
      {
        id: '6',
        name: 'canasta de soyate',
        price: 90,
        image: 'https://http2.mlstatic.com/jogo-cesto-palha-de-milho-c3-cestos-artesanal-D_NQ_NP_613602-MLB25573561324_052017-O.jpg',
        description: 'Sombrero hecho con fibra natural de soyate, ideal para el sol.'
      },
      {
        id: '7',
        name: 'collar de chaquira',
        price: 550,
        image: 'https://i.etsystatic.com/15493948/r/il/325b67/2192705390/il_1588xN.2192705390_5caf.jpg',
        description: 'Collares de chaquiras en forma de flores y con diferentes colores.'
      },
      {
        id: '8',
        name: 'Aretes',
        price: 150,
        image: 'https://i.etsystatic.com/15493948/r/il/325b67/2192705390/il_1588xN.2192705390_5caf.jpg',
        description: 'los aretes son parte de la vestimenta.'
      }
    ]

    this.product = allProducts.find(p => p.id === productId)
  }
}
</script>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.product-img {
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}
.info {
  text-align: center;
}
.price {
  font-weight: bold;
  color: #d1086d;
  margin: 1rem 0;
}
.btn-back {
  display: inline-block;
  margin-top: 1rem;
  background: #d1086d;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}
</style>
