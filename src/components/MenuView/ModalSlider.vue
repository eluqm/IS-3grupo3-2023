<template>
    <button @click="openModal()" class="btn-modal">
        Seleccionar un Menu
    </button>
    <div v-if="showModal" class="modal">
        <div class="slider-container">
        <div class="card-slider" :style="{transform: `translateX(${translateX}rem)`}">
            <div class="card">

                <div class="menus">
                    <h2>Menus disponibles</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre del menu</th>
                                <th>Descripción</th>
                                <th>Cantidad de platos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(menu, index) in menus" :key="index">
                                <td>{{ menu.name }}</td>
                                <td>{{ menu.description }}</td>
                                <td>  -  </td>
                                <td class="primary">
                                    <button class="select-menu" @click="close(menu)">
                                        Seleccionar
                                    </button>
                                </td>
                            </tr>                        
                        </tbody>
                    </table>
                    <div class="options">
                        <button @click="closeModal()">Cancelar</button>    
                        <button @click="slideNext()">Siguiente</button>    
                    </div>             
                </div>
            </div>
            <div class="card">
                <div class="items">
                    <h2>Seleccione la cantidad de porciones que hay</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre del plato</th>
                                <th>Descripción</th>
                                <th>Imagen</th>
                                <th>Cantidad de platos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in menu_items" :key="index">
                                <td>{{ item.name }}</td>
                                <td>{{ item.description }}</td>
                                <td>  -  </td>
                                <td>
                                    <input type="number" v-model="item.amount">
                                </td>
                            </tr>                        
                        </tbody>
                    </table>
                    <div class="options">
                        <button @click="slidePrev()">Retroceder</button>
                        <button @click="sendMenu">Aceptar</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    </div>
</template>

<script>
import { socket, state } from '@/socket'
console.log("EJecutando modal slider")
export default {
    data(){
        return{
            showModal: false,
            //menus: [],
            menu_items: [],
            currentIndex: 0
        }
    },
    props: {
        selectMenu: {type: Function, required: true}
        //menu_items: {type: Array, required: true}
    },
    computed: {
        translateX(){
            return -this.currentIndex * 50
        },
        menus(){
            return state.menus;
        },
    },
    methods: {
        openModal(){
            console.log("Open Modal")
            this.showModal = true;
        },
        closeModal(){
            //this.selectMenu()
            this.showModal = false;
        },
        close(menu){
            this.selectMenu(menu);
            this.showModal = false;
        },
        slideNext(){
            this.currentIndex++;
            if(this.currentIndex >= 2){
                this.currentIndex = 0;
            }
        },
        slidePrev(){
            this.currentIndex--;
            if(this.currentIndex < 0) {
                this.currentIndex = 1;
            }
        },
    },
    mounted(){
        socket.emit("get-menus")
    },
    
    setup(props){
        
    }
}
</script>

<style scoped>
.modal{
    /*display: none;*/
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}
.slider-container{
    width: 50rem;
    height: 40rem;
    margin: 10rem auto;
    overflow: hidden;
}
.card-slider{
    display: flex;
    transition: transform 0.3s ease-in-out;
}
.card{
    flex: 0 0 50rem;
    border-radius: 1rem;
    background: white;
}
.options{
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}


.menus{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
}
.menus table{
  width: 100%;
  padding: var(--card-padding);
  align-items: center;
  border-spacing: 0 1rem;
}

.menus table:hover{
  box-shadow: none;
}

.menus table tbody tr{
    background: white;
}

.menus table tbody td{
  height: 4rem;
  border-bottom: 1px solid var(--color-light);
  text-align: center;
}

.menus button{
  text-align: center;
  margin: 1rem auto;
  color: white;
  display: block;
  border-radius: 0.4rem;
}
</style>
