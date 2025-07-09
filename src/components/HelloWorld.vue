<template>
  <div>
    <div class="card-body d-flex flex-column justify-content-between flex-grow-1">
      <img src="https://i.etsystatic.com/36969499/r/il/0e9c00/4174046284/il_1140xN.4174046284_7pv6.jpg" height="25%" width="100%" />
      <router-link :to="`/libro/`" class="btn btn-primary mt-3">Ver más</router-link>
    </div>

    <section class="section">
      <div class="container">
        <div class="section-cards">
          <div class="section-card">
          <img src="https://tienda.hechoenveracruz.gob.mx/wp-content/uploads/2023/01/bolsita-mediana.jpg" alt="Imagen tarjeta 1" />  
            <span>1</span>
            <h2>Tarjeta 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">Saber más</a>
          </div>
          <div class="section-card">
             <img src="https://www.amigosmap.org.mx/wp-content/uploads/2022/03/DURANGO5.jpg" alt="Imagen tarjeta 1" />
            <span>2</span>
            <h2>Tarjeta 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">Saber más</a>
          </div>
          <div class="section-card">
             <img src="https://www.artesanum.com/content/upi/6/26036/4/252ed88bb6dbc4ae.jpg" alt="Imagen tarjeta 1" /> 
            <span>3</span>
            <h2>Tarjeta 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">Saber más</a>
          </div>
           <div class="section-card">
             <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/74667381_2668538786538076_2000505378890055680_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ePEUmbYoKBkQ7kNvwGXZtPh&_nc_oc=AdkMN0KYVr98SNPPy5ebw02HXuqNVzMsQQ5WGatZtyzsRlVDrv5tehSDumKf7uZTu9A&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=_Z3RO7x8W3Opzcajv0QTzg&oh=00_AfQTeaObuYRxTiIhSrTrI9X30X0dETu9EveCzHTczijMNg&oe=68961023" alt="Imagen tarjeta 1" /> 
            <span>4</span>
            <h2>Tarjeta 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">Saber más</a>
          </div>
        </div>
      </div>
    </section>
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
  gap: 20px;
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

</style>
