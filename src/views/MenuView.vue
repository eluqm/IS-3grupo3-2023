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
                                <button class="select-menu">
                                    Seleccionar
                                </button>
                            </td>
                        </tr>                        
                    </tbody>
                </table>                
            </div>
        </main>
        <div class="right">

        </div>
    </div>
</template>

<script>
import { socket } from '@/socket'
import { state } from '@/socket'
export default {
  name: 'MenuView',
  data(){
    return {
        //menus : []
    }
  },
  mounted(){
    
  },
  computed: {
    menus(){
        return state.menus;
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


</style>
