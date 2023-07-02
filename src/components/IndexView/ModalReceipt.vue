<template>
    <button class="btn-receipt" @click="openModal()">
        <i class="material-symbols-sharp btn-receipt">receipt_long</i>
        <p v-if="length > 0" class="badge">{{length}}</p>
    </button>
    <div class="modal-overlay" :class="{active :showModal}">
        <div class="modal">
            <h2>Seleccione la cantidad de porciones que desea</h2>
            <div v-for="(item,index) in this.items" :key="index" class="item">
                    <p>{{item.name}}</p>
                    <p>{{item.description}}</p>
                    <p>S/. {{item.price}}</p>
                    <p></p>
                    <div class="amount">
                        <button>-</button>
                        <p>{{item.amount}}</p>
                        <button>+</button>
                    </div>
                    <p>S/. {{item.amount * item.price}}</p>
            </div>
            
            <div class="options">
                <button @click="closeModal()">Retroceder</button>
                <button @click="makeOrder()">Ordenar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalReceipt",
    data(){
        return{
            showModal: false,
            menu_items: [],
        }
    },
    props: {
        items : {type: Array, required: true},
        sendOrder: {type: Function, required: true}

    },
    computed: {
        length(){
            return this.items.length;
        }
    },
    methods: {
        openModal(){
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        },
        makeOrder(){
            this.showModal = false;
            this.sendOrder();
        }
    },
    mounted(){
    },
}
</script>

<style scoped>
.btn-receipt{
    position: sticky;
    top: 5rem;
    left: 20rem;
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
  position: absolute;
  top: 50%;
  background-color: #fff;
  padding: 20px;
  opacity: 0;
  /*visibility: hidden;*/
  transition: transform 1s;
  /*transform: translateY(-100%);*/
  color: black;
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
    grid-template-columns: 30% 50% 20%;
    gap: 1rem;
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

.modal table tbody tr{
    background: white;
}

.modal table tbody td{
  height: 4rem;
  border-bottom: 1px solid var(--color-light);
  text-align: center;
}

.modal button{
  text-align: center;
  margin: 1rem auto;
  color: white;
  display: block;
  border-radius: 0.4rem;
}
</style>
