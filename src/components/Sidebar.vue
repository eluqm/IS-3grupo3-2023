<template>
    <div class="aside">
        <div class="top">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
                <h2>J.E.<span class="danger">S.C.</span></h2>
            </div>
            <div class="close" id="close-btn">
                <i class="material-symbols-sharp">close</i>
            </div>
        </div>
      <div class="sidebar">
        <SidebarLink to="/admin/dashboard" name="Dashboard" icon="grid_view"/>
        <SidebarLink to="/admin/orders" name="Ordenes" icon="receipt_long"/>
        <SidebarLink to="/admin/finished_orders" name="Ordenes Terminadas" icon="order_approve"/>
      </div>
    </div>
</template>
  
<script >
import SidebarLink from '../components/SidebarLink.vue'
export default {
  name: 'Sidebar',
  props: {
      //msg: String
  },
  components: {SidebarLink}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  --color-primary:#7380ec;
}

.aside {
  display: block;
  width: 20rem;
  height: 100vh;
  margin: 0;
  padding: 1rem 0.5rem;
  background: var(--color-primary);
  color: white;
}
/*
.aside {
  background: white;
  margin-top: 1.8rem;
  height: 100vh;
}
*/
.aside .top{
  margin: 0rem 0 1rem;
  text-align: center;
}

.aside .top .logo{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.aside .top .logo img{
  width: 2rem;
  height: 2rem;
}
.aside .top .logo i{
  font-size: 3rem;
}
.aside .close{
  display: none;
}
.aside .sidebar{
  display: flex;
  flex-direction: column;
  height: 86vh;
  position: relative;
  margin-top: 2rem;
  color: white;
}

.aside .sidebar .a{
  text-decoration: none;
  /*color: var(--color-info-dark);*/
  color: white;
  display: flex;
  height: 3.7rem;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
  position: relative;
  transition: all 300ms ease;
  background: transparent;
}
.aside .sidebar .a i{
  transition: all 300ms ease;
}
.aside .sidebar .a.active{
  background-color: var(--color-white);
  color: var(--color-primary);
  margin-left: 0rem;
}

.aside .sidebar .a.active::before{
  content: '';
  height: 100%;
  width: 6px;
  background: var(--color-primary);
}
.aside .sidebar .a:hover{
  /*color: var(--color-primary);*/
}
.aside .sidebar .a:hover i{
  margin-left: 1rem;                                                                                
}
.aside .side a .active:hover i{
  margin-left: 0;
}
</style>