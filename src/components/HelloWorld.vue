<template>
    <br>
    <br>
    <br>
   <center>
   <h2 class="animate__animated animate__fadeInDown">
    ¡BIENVENIDOS A MI BLOG DE ARTESANIAS!
   </h2>
   </center>

   <br>
   <!-- Contenedor centrado y con tamaño personalizado -->
   <div style="max-width: 800px; margin: 0 auto;">
   <!-- Carrusel -->
   <div id="carouselExampleFade" class="carousel slide carousel-fade"  data-bs-ride="carousel" data-bs-interval="4000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i.etsystatic.com/36969499/r/il/0e9c00/4174046284/il_1140xN.4174046284_7pv6.jpg" class="d-block w-100" alt="Imagen 1">
      </div>
      <div class="carousel-item">
        <img src="https://tse1.mm.bing.net/th/id/OIP.CDNslIogo0j3JAzrZV6UpwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" class="d-block w-100" alt="Imagen 2">
      </div>
      <div class="carousel-item">
        <img src="https://i.pinimg.com/originals/1a/8b/6b/1a8b6bf10d3e5081d1ab635f2e337405.jpg" class="d-block w-100" alt="Imagen 3">
      </div>
       <div class="carousel-item">
        <img src="https://www.lessonface.com/sites/default/files/styles/premium_product/public/product-images/img-20240125-164936957-hdr1.jpg" class="d-block w-100" alt="Imagen 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
  </div>


   <div class="section-cards">
  <div class="section-card">
    <img src="https://tienda.hechoenveracruz.gob.mx/wp-content/uploads/2023/01/bolsita-mediana.jpg" alt="Imagen tarjeta 1" />  
    <span>1</span>
    <h2>MORRAL</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/1'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>

  <div class="section-card">
    <img src="https://www.amigosmap.org.mx/wp-content/uploads/2022/03/DURANGO5.jpg" alt="Imagen tarjeta 2" />
    <span>2</span>
    <h2>Sombrero de soyate</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/2'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>

  <div class="section-card">
    <img src="https://www.artesanum.com/content/upi/6/26036/4/252ed88bb6dbc4ae.jpg" alt="Imagen tarjeta 3" /> 
    <span>3</span>
    <h2>Pulsera de chaquira</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/3'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>

  <div class="section-card">
    <img src="https://tecolotito.elsiglodedurango.com.mx/i/2021/03/961533.jpeg" alt="Imagen tarjeta 4" /> 
    <span>4</span>
    <h2>Traje típico de mujer</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/4'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>
  <div class="section-card">
    <img src="https://http2.mlstatic.com/D_NQ_NP_724820-MLM45677710588_042021-F.jpg" alt="Imagen tarjeta 1" />  
    <span>5</span>
    <h2>Servilleta</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/5'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>
  <div class="section-card">
    <img src="https://http2.mlstatic.com/jogo-cesto-palha-de-milho-c3-cestos-artesanal-D_NQ_NP_613602-MLB25573561324_052017-O.jpg" alt="Imagen tarjeta 1" />  
    <span>6</span>
    <h2>Canasta de soyate</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/6'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>
  <div class="section-card">
    <img src="https://i.etsystatic.com/15493948/r/il/325b67/2192705390/il_1588xN.2192705390_5caf.jpg" alt="Imagen tarjeta 1" />  
    <span>7</span>
    <h2>Collar de chaquira</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/7'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>
  <div class="section-card">
    <img src="https://tse3.mm.bing.net/th/id/OIP.zzjEU77kTOGOUWh9T_MLzAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Imagen tarjeta 1" />  
    <span>1</span>
    <h2>pulcera de chaquira</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <router-link :to="'/detalle/8'" class="btn btn-primary mt-2">
      Saber más
    </router-link>
  </div>

 </div>
 </template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner img {
  height: 500px;
  object-fit: cover;
}

.carousel {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  height: 500px;
}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}body {
font-family: 'poppins', sans-serif;
background-color: #f9f9f9;
font-size: 20px;
}.container {
max-width: 900px;
padding: 0 15px;
margin: auto;
}.section {
padding: 40px 0;
min-height: 100vh;
display: flex;
justify-content: center;
}.section-cards {
display: flex;
justify-content: space-between;
}.section-card {
background-color: #ffffff;
border-radius: 10px;
padding: 30px;
position: relative;
text-align: center;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
width: 31%;
}.section-card:hover {
transform: translateY(-10px);
background-image: linear-gradient(45deg, #faafd4, #f7dde1);
cursor: pointer;
}.section-card span {
display: block;
background-color: #ff69b4;
color: #ffffff;
border-radius: 50%;
width: 40px;
height: 40px;
line-height: 40px;
font-size: 24px;
margin: 0 auto 15px;
}.section-card h2 {
font-size: 24px;
color: #333333;
margin-bottom: 10px;
}.section-card p {
color: #666666;
line-height: 1.5;
margin-bottom: 20px;
}.section-card a {
display: inline-block;
text-transform: capitalize;
background-color: #ff69b4;
color: #ffffff;
padding: 8px 20px;
border-radius: 25px;
font-weight: 500;
text-decoration: none;
transition: background-color 0.3 ease-in-out;
}.section-card a:hover {
background-color: #ff4486;
}
.section-cards {
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
}

.section-card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.section-card img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 12px;
}
.custom-carousel {
  height: 180px;
}

@media (min-width: 768px) {
  .custom-carousel {
    height: 250px;
  }
}

</style>
