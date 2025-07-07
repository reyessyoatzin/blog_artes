<template>
    <div class="card-body d-flex flex-column justify-content-between flex-grow-1">
    <img src="https://i.etsystatic.com/36969499/r/il/0e9c00/4174046284/il_1140xN.4174046284_7pv6.jpg"/>
      <router-link :to="`/libro/`" class="btn btn-primary mt-3">Ver más</router-link>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
