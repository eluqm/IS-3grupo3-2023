<template>
    <div class="container">
      <Presentation/>
      <div class="orders">
        <div class="instructions">
          <p class="title">Ordene lo que desee</p>
          <p>Seleccione los platos y bebidas que desee ordenar</p>
          <p>Luego presione el boton </p>
        </div>

        <ModalReceipt :_items="this.order.items" 
        :sendOrder="this.sendOrder" :cancelItem="this.cancelItem" :setTable="this.setTable"/>

        <div class="menu">
          <ItemIndex v-for="(item, key, index) in state.client_menu.items" :key="index" 
          :item="item" :index="index" 
          :addItem="addItem" :cancelItem="cancelItem"/>
        </div>

        <div class="answer" v-if="show_answer_message">
          <p>{{answer_message}}</p>
        </div>
      </div>
    </div>
    
</template>

<script>

import { socket, state } from '@/socket'
import Presentation from '@/components/IndexView/Presentation.vue'
import ModalReceipt from '@/components/IndexView/ModalReceipt.vue'
import ItemIndex from '@/components/IndexView/ItemIndex.vue'
export default {
  name: 'HomeView',
  components: {
    Presentation,
    ModalReceipt,
    ItemIndex

  },
  data(){
    return {
      state,
      //menu_items: [],
      order : {
        time:'',
        id_table: 0,
        items: []
      },
      id_table : 0,
      show_answer_message: false,
      answer_message: ""
    }
  },
  methods:{
    addItem(item, index){
      state.client_menu.items[item.id_item].amount = 1
      //let item = this.items[index];
      //item.amount = 1;
      //this.order.items.push(item);
      //this.items[index].bought = true;
    },
    cancelItem(item, index){
      state.client_menu.items[item.id_item].amount = 0
      //this.order.items.splice(index, 1);
      //this.items[index].bought = true;
    },
    sendOrder(){
      let today = new Date();
      //this.order.time = today.toLocaleTimeString();
      let time = today.toLocaleTimeString();
      console.log(this.order);
      let order = {
        time,
        id_table: this.id_table,
        items: state.client_menu.items
      };
      socket.emit("handle-order", order)
      //this.order.items = [];
      setTimeout(() => {
        console.log("3 segundos")
        if(this.answer_order.state > 0){
          if(this.answer_order.state === 1){
            this.answer_message = "Pedido aceptado";
            //location.reload()
            //socket.emit("get-ready-menu");
          }
          if(this.answer_order.state === 2){
            this.answer_message = "Pedido rechazado";
          }
          this.show_answer_message = true;
          console.log(this.show_answer_message = true);
          setTimeout(()=>{
            this.show_answer_message=false;
            this.answer_order.state = 0;
          }, 3000)
        }
      }, 3000);
    },
    setTable(id_table){
      //this.order.id_table = id_table;
      this.id_table = id_table;
    }
  },
  computed: {
    //
    //items(){
    //  console.log("modificadno item")
    //  return state.client_menu.items;
    //},
    length_ordered_items(){
      return this.order.items.length;
    },
    answer_order(){
      return state.answer_order;
    }

  },
  mounted(){
    socket.emit("get-ready-menu");
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgb(236,33,19);
    background: linear-gradient(90deg, rgba(236,33,19,1) 0%, rgba(242,112,53,1) 40%, rgba(255,218,0,1) 100%);
    color: white;
  }
  
.orders{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.instructions{
  margin: 1rem 2rem;
  font-family: "Annie Use Your Telescope", cursive;
  font-weight: bold;
  text-align: left;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  background-color: transparent;
  text-shadow: rgb(0, 0, 0) -4px 4px 3px;
}
.instructions .title{
  font-size: 3rem;
}

.menu{
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

.answer{
    position: fixed;
    top: 80%;
    left: 45%;
    width: 25rem;
    height: 3rem;
    background: rgb(183, 183, 183);
    color: azure;
    border-radius: 0rem;
    border: 1px solid black;
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

/*Este e sun ejemplo de como se deben realizar las media queries*/
/*=====MEDIA QUERIES ===========*/
@media screen and (max-width: 700px){
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: rgb(236,33,19);
    background: linear-gradient(90deg, rgba(236,33,19,1) 0%, rgba(242,112,53,1) 40%, rgba(255,218,0,1) 100%);
    color: white;
  }
  

  .instructions{
    margin: 1rem 2rem;
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: left;
    font-size: 25px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }
  .menu{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
}
}
</style>
  