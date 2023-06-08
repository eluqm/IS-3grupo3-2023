<template>
    <div class="admin">
        <Sidebar/>
        <div class="wrapper">
            <Topbar/>
            <router-view/>
        </div>
    </div>
    
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
export default {
    name: 'Admin',
    components: {Sidebar, Topbar}
}
</script>
<style scoped>
.admin {
    display: flex;
}
.wrapper {
    width: 100%;
    height: 100%;
}
</style>