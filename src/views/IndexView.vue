<template>
    <div class="home">
        <h1>Index</h1>
    </div>
    <div>
      <button @click="sendOrder">Enviar orden</button>
    </div>
    
</template>

<script>
import { socket } from '@/socket'
export default {
name: 'HomeView',
components: {
},
methods:{
  sendOrder(){
    socket.emit("handle-order", { msg : 'este es un mensaje'})
  }
}
}
</script>

<style scoped>
/*Este e sun ejemplo de como se deben realizar las media queries*/
/*=====MEDIA QUERIES ===========*/
@media screen and (max-width: 700px){
  .container{
    width: 90%;
  }
}
</style>
  