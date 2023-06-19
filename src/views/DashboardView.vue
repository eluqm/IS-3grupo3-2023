<template>
  <div class="container">
    <main>
      <h1>Dashboard</h1>
      <div class="date">
          <input type="date">
      </div>
      <ul>
        <li v-for="(objeto, index) in connected" :key="index">{{ objeto }}</li>
      </ul>
      <div class="recent-orders">
        <h2>Ordenes recientes</h2>
        <table>
            <thead>
                <tr>
                    <th>#ID Orden</th>
                    <th>#Mesa</th>
                    <th>#Items</th>
                    <th>Hora</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(objeto, index) in connected" :key="index">{{ objeto }}>
                  <td>{{ order.idOrden }}</td>
                  <td>{{ order.mesa }}</td>
                  <td>{{ order.items }}</td>
                  <td>{{ order.hora }}</td>
                  <td>{{ order.estado }}</td>
                  <td class="primary">Detalles</td>
                </tr>
                <tr>
                  <td>85631</td>
                  <td>8</td>
                  <td>4</td>
                  <td>15:35</td>
                  <td class="warning">Pendiente</td>
                  <td class="primary">Detalles</td>
                </tr>
                <tr>
                  <td>85631</td>
                  <td>8</td>
                  <td>4</td>
                  <td>15:35</td>
                  <td class="warning">Pendiente</td>
                  <td class="primary">Detalles</td>
                </tr>
                <tr>
                  <td>85631</td>
                  <td>8</td>
                  <td>4</td>
                  <td>15:35</td>
                  <td class="warning">Pendiente</td>
                  <td class="primary">Detalles</td>
                </tr>
                
            </tbody>
        </table>
        <a href="#">Show all</a>
      </div>
    </main>
    <!-- END RECENT orders-->
    <div class="right">
      <div class="div-frequency">
        <h2>Frecuencia de ordenes</h2>
        <div class="frequency">
          <div class="frequency-item">
            <div class="progress-line">
              <p>Fuente 1</p>
            </div>
            <p>20</p>
          </div>
          <div class="frequency-item">
            <div class="progress-line" :style="{'width':'75' +'%'}">
              <p>Fuente 2</p>
            </div>
            <p>15</p>
          </div>
          <div class="frequency-item">
            <div class="progress-line" :style="{'width':'50' +'%'}">
              <p>Fuente Mixta</p>
            </div>
            <p>10</p>
          </div>
          <div class="frequency-item">
            <div class="progress-line" :style="{'width':'25' +'%'}">
              <p>Fuente 5</p>
            </div>
            <p>5</p>
          </div>
        </div>
      </div>
      <!--  END DIV-FREQUENCY  -->
      <div class="div-personnel">
        <h2>Personal</h2>
        <div class="personnel">
          <div class="personnel-item">
            <img src="../assets/profile-1.jpg" alt="" class="profile-photo">
            <p>Edward Dominic</p>
          </div>
          <div class="personnel-item">
            <img src="../assets/profile-1.jpg" alt="" class="profile-photo">
            <p>Edward Dominic</p>
          </div>
          <div class="personnel-item">
            <img src="../assets/profile-1.jpg" alt="" class="profile-photo">
            <p>Edward Dominic</p>
          </div>
        </div>
      </div>
      <!--  END DIV-PERSONEEL -->
    </div>
  </div>
</template>

<script>
import {state} from '@/socket'
//import Sidebar from '../components/Sidebar.vue'
import Sidebar from '../components/Sidebar.vue'
import Profile from '../components/Profile.vue'
export default {
  name: 'DashboardView',
  components: {Sidebar, Profile},
  computed:{
    connected(){
      return state.orders;
    }
  }
}
</script>

<style scoped>
 * {
  /*RIGHT*/
  --color-light: #9094ce39;
  --border-radius-1: 0.4rem;
  --color-white: #fff;
  --color-primary:#7380ec;
}

.primary {
  color: var(--color-primary);
}
.warning {
  color: var(--color-warning);
}

.container {
  display: grid;
  grid-template-columns: auto 23rem;
  gap: 1.8rem;
  padding: 1rem;
}
/* MAIN RECENT ORDERS */

main {
  margin-top: 1rem;
}

main .date{
  display: inline-block;
  background: var(--color-light);
  border-radius: var(--border-radius-1);
  margin-top: 1rem;
  padding: 0.5rem 1.6rem;
}

main .date input[type="date"] {
  background: transparent;
  color: var(--color-dark);
}






main .recent-orders{
  margin-top: 2rem;
}

main .recent-orders h2{
  margin-bottom: 0.8rem;
}

main .recent-orders table{
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  width: 100%;
  padding: var(--card-padding);
  box-shadow: var(--box-shadow);
  align-items: center;
  transition: all 300ms ease;
}

main .recent-orders table:hover{
  box-shadow: none;
}


main table tbody td{
  height: 2.8rem;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
  text-align: center;
}

main table tbody tr:last-child td{
  border: none;
}


main .recent-orders a{
  text-align: center;
  margin: 1rem auto;
  color: var(--color-primary);
  display: block;
}

/* RIGHT TOP */
.right{
  margin-top: 1.4rem;
}

/*END RIGHT TOP*/
.right .div-frequency{
  margin-top: 1rem;
}
.right .div-frequency h2{
  margin-bottom: 0.8rem;
}
.right .div-frequency .frequency{
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;
  /*justify-content: center;*/
}
.right .div-frequency .frequency .frequency-item{
  display: flex;
  gap: 0.4rem;
  padding: 0.2rem;
}
.right .div-frequency .frequency .frequency-item .progress-line{
  border-radius: 0.5rem;
  height: 1rem;
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
}
.right .div-personnel{
  margin-top: 1rem;
}
.right .div-personnel .personnel {
  margin-top: 0.5rem;
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;
  display: flex;
  gap: 1.5rem;
}
.right .div-personnel .personnel .personnel-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  gap: 0.4rem;
}
.profile-photo{
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
}
</style>