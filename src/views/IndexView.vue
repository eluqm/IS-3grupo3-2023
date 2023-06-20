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
  methods: {
    sendOrder() {
      const order = {
        msg: 'este es un mensaje',
        dishes: [
          { dishId: 1, name: 'Dish 1' },
          { dishId: 2, name: 'Dish 2' },
          { dishId: 3, name: 'Dish 3' },
          { dishId: 4, name: 'Dish 4' }
        ]
        
      }
      socket.emit('handle-order', order)
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
  