<template>
    <button class="btn-receipt" @click="openModal()">
        <i class="material-symbols-sharp btn-receipt">receipt_long</i>
        <p v-if="length > 0" class="badge">{{length}}</p>
    </button>
    <div class="modal-overlay" :class="{active :showModal}">
        <div class="modal" ref="scrollableDiv">
            <h2>Seleccione la cantidad de porciones que desea</h2>
            <template v-for="(item,key,index) in state.client_menu.items" :key="index">
            <div v-if="item.amount > 0" class="item">
                    <p>{{item.name}}</p>
                    <p>{{item.description}}</p>
                    <p>S/. {{item.price}}</p>
                    <div class="div-icon span-2">
                        <button class="btn-icon" @click="cancelItem(index)">
                            <i class="material-symbols-sharp">cancel</i>
                        </button>
                    </div>
                    <p></p>
                    <div class="amount">
                        <button @click="decreaseAmountItem(item, index)">-</button>
                        <p>{{item.amount}}</p>
                        <button @click="increaseAmountItem(item, index)">+</button>
                    </div>
                    <p>S/. {{item.amount * item.price}}</p>
            </div>
            </template>

            <div class="table">
                <label>Ingrese el número de mesa</label>
                <input class="input" type="number" v-model="id_table">
            </div>
            
            <div class="options">
                <button @click="closeModal()">Retroceder</button>
                <button @click="makeOrder()">Ordenar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { socket, state } from '@/socket'
export default {
    name: "ModalReceipt",
    props: {
        _items : {type: Array, required: true},
        sendOrder: {type: Function, required: true},
        cancelItem: {type: Function, required: true},
        setTable : {type: Function, required: true}
    },
    data(){
        return{
            state,
            showModal: false,
            menu_items: [],
            id_table: 0,
            items: this._items
        }
    },
    computed: {
        
        computedItems(){
            return this._items;
        },
        length(){
            return this.computedItems.length;
        }
    },
    methods: {
        openModal(){
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        },
        increaseAmountItem(item, index){
            //this.items[index].amount++;
            state.client_menu.items[item.id_item].amount++;
        },
        decreaseAmountItem(item, index){
            //if(this.items[index].amount > 1){
            if(state.client_menu.items[item.id_item].amount > 1){
                state.client_menu.items[item.id_item].amount--;
                //this.items[index].amount--;
            }
        },
        makeOrder(){
            this.showModal = false;
            this.setTable(this.id_table)
            this.sendOrder();
            //let orderes_items = []
            //for(let key in state.client_menu.items){
            //    if(state.client_menu.items[key].amount > 0){
            //        orderes_items.push(state.client_menu.items[key]);
            //    }
            //}
            
        },
        initializeScrollbar(){
            const scrollableDiv = this.$refs.scrollableDiv;
            scrollableDiv.addEventListener('scroll', this.handleScroll);
        }
    },
    mounted(){
        this.initializeScrollbar()
    },
}
</script>

<style scoped>
.btn-receipt{
    position: sticky;
    top: 5rem;
    left: 80%;
    width: 4rem;
    height: 4rem;
    color: black;
    background: rgb(0, 255, 213);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
  }
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 9999;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal {
    width: 45rem;
    height: 30rem;
    position: absolute;
    top: 25%;
    left: 25%;
    background-color: #fff;
    padding: 20px;
    opacity: 0;
    /*visibility: hidden;*/
    transition: transform 1s;
    /*transform: translateY(-100%);*/
    color: black;
    overflow-y: auto;
    overflow-x: hidden;
}

.modal .active{
    transition: translateY(0%);
}

.modal-overlay.active .modal {
  opacity: 1;
  visibility: visible;
}

.options{
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}



.item{
    margin-top: 1rem;
    color: black;
    display: grid;
    grid-template-columns: 20% 50% 15% 15%;
    grid-template-rows: auto;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}
.span-2{
    grid-row-end: span 2;
}

.item .data{
    
}

.item .data2{
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1rem;
}

.item .amount{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.table {
    display: flex;
    gap: 1rem;
    color: black;
}

.table .input{
    border: 1px solid black;
}



.items{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
}
.modal table{
  width: 100%;
  padding: var(--card-padding);
  align-items: center;
  border-spacing: 0 1rem;
}

.modal table:hover{
  box-shadow: none;
}

.modal button{
  text-align: center;
  margin: 1rem auto;
  color: white;
  display: block;
  border-radius: 0.4rem;
}

@media screen and (max-width: 700px){
    .btn-receipt{
        top: 80%;
        left: 75%;
    }
    .modal{
        width: 100%;
        height: 80%;
        top: 10%;
        left: 0%;
    }
}
</style>
