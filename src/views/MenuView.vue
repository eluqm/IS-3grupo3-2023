<template>
    <div class="container">
        <main>
            <h1>Menu</h1>
            <div class="menu">
              <div v-if="active" class="current-menu">
                <h2>Menu en curso</h2>
                <div class="menu-data">
                  <h2>{{state.menu.name}}</h2>
                  <h2>{{state.menu.description}}</h2>
                </div>
              </div>
              <h3 v-else>No hay un menú en curso</h3>
              <ModalMenus :selectMenu="setMenu"/>
            </div>
            <div class="items">
              <h2>Seleccione la cantidad de porciones que hay</h2>
              <div v-for="(item, key, index) in state.menu.items" :key="index" class="item" :class="getClassColor(item)">
                <div class="image">
                  <img :src="item.image" alt="">
                </div>
                <div class="data">
                  <div class="description">
                    <p><strong>{{item.name}}</strong></p>
                    <p>{{item.description}}</p>
                  </div>
                  <div class="amount">
                    <button @click="decreaseAmount(item.id_item, index)" :disabled="item.enabled" :class="{'disabled': item.enabled}">-</button>
                    <p>{{item.amount}}</p>
                    <button @click="increaseAmount(item.id_item, index)" :disabled="item.enabled" :class="{'disabled': item.enabled}">+</button>
                  </div>
                  <div class="activation">
                    <button :class="{'disabled': !item.enabled}" @click="disableItem(item.id_item, index)">Deshabilitar</button>
                    <button :class="{'disabled': item.enabled}" @click="enableItem(item.id_item, index)">Habilitar</button>
                  </div>
                </div>
              </div>
            </div>
            
        </main>
        <div class="right">

        </div>
    </div>
</template>

<script>
import { socket, state } from '@/socket'
import ModalMenus from '../components/MenuView/ModalSlider.vue'
export default {
  name: 'MenuView',
  components: {
    ModalMenus
  },
  data(){
    return {
        state,
        menu_items: []
    }
  },
  methods:{
    setMenu(menu){
      socket.emit("set-menu",menu);
    },
    increaseAmount(id_item , index){
      state.menu.items[id_item].amount ++;
      //solo con el statement de arriba deberia mirar
      //cambiar el valor por pantalla
      //recien cuando se habilita se envio al servidor
    },
    decreaseAmount(id_item, index){
      if(state.menu.items[id_item].amount > 0)
        state.menu.items[id_item].amount --;
    },
    enableItem(id_item, index){
      state.menu.items[id_item].enabled = true;
      socket.emit("enable-item", state.menu.items[id_item]);
      //aumentar el seteo del amount del menu
    },
    disableItem(id_item, index){
      state.menu.items[id_item].enabled = false;
      socket.emit("disable-item", state.menu.items[id_item]);
      //aumentar el seteo del amount del menu
    },
  },
  computed: {
    active(){
      if(state.menu.name){
        return true;
      }
      return false;
    },
    getClassColor(){
      return function(item){
        return {
        'green': item.enabled && item.amount > 0,
        'orange': !item.enabled && item.amount > 0,
        'red': !item.enabled && item.amount === 0 ,
        }
      };
    }
  },
  mounted(){
    socket.emit("get-complete-menu");
    console.log("Menu view mounted:", state.menu)
  }
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 23rem;
  gap: 1.8rem;
  padding: 1rem;
}

main {
  margin-top: 1rem;
}
main .menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

.menu .current-menu .menu-data{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 2rem;
  padding: 1.5rem;
} 

.items{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
}

.items .green{
  background: green;
}
.items .orange{
  background: orange;
}

.items .red{
  background: red;
}

.item{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(191, 246, 191);
  width: 45rem;
  height: 14rem;
}



.item .image{
  width: 16rem;
  height: 11rem;
  margin: 1rem 1.5rem;
}
.item .image img{
  width: 15rem;
  height: 10rem;
  border-radius: 1rem;
}

.item .data{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
}
.item .description{
  color: white;
  word-wrap: break-word;
}

.item .data .amount{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.item .activation{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem
}

.item .disabled{
  opacity: 0.5;
}

.items button{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(92, 111, 237);
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  color: white;
  font-weight: bold;
  border-radius: 0.4rem;
}

</style>
