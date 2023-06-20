<template>
    <div class="container">
        <main>
            <h1>Menu</h1>
            <div class="current-menu">
                <h2>Menu en curso</h2>
                <h3>No hay un menú en curso</h3>
            </div>
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
                                <button class="select-menu" @click="getItems(menu.id_menu)">
                                    Seleccionar
                                </button>
                            </td>
                        </tr>                        
                    </tbody>
                </table>                
            </div>
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
                <button @click="sendMenu">Aceptar</button>
            </div>
        </main>
        <div class="right">

        </div>
    </div>
</template>

<script>
import { socket, state } from '@/socket'
export default {
  name: 'MenuView',
  data(){
    return {
        menu_items: []
        //menus : []
    }
  },
  methods:{
    getItems(id_menu){
      socket.emit("get-items-from-menu", id_menu , ()=>{});
      this.menu_items =  state.items_from_menu;
    },
    sendMenu(){
      console.log("menu_items",this.menu_items)
      socket.emit("handle-menu", this.menu_items,()=>{})
    }
  },
  mounted(){
    socket.emit("get-menus", {}, ()=>{

    })
  },
  computed: {
    menus(){
        return state.menus;
    },
    items(){
      return state.items_from_menu;
    }
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
main .current-menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}
main .menus{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
}
main .menus table{
  width: 100%;
  padding: var(--card-padding);
  align-items: center;
  border-spacing: 0 1rem;
}

main .menus table:hover{
  box-shadow: none;
}

main .menus table tbody tr{
    background: white;
}

main .menus table tbody td{
  height: 4rem;
  border-bottom: 1px solid var(--color-light);
  text-align: center;
}

main .menus button{
  text-align: center;
  margin: 1rem auto;
  color: white;
  display: block;
  border-radius: 0.4rem;
}

main .items{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
}
main .items table{
  width: 100%;
  padding: var(--card-padding);
  align-items: center;
  border-spacing: 0 1rem;
}

main .items table:hover{
  box-shadow: none;
}

main .items table tbody tr{
    background: white;
}

main .items table tbody td{
  height: 4rem;
  border-bottom: 1px solid var(--color-light);
  text-align: center;
}

main .items input{
  background: rgb(138, 118, 82);
  height: 2rem;
  text-align: center;
  margin: 1rem auto;
  color: white;
  display: block;
  border-radius: 0.4rem;
}
main .items button{
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
