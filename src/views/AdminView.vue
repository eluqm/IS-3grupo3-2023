<template>
    <router-view/>
    <!-- -->
    <div class="container">
        <!-- <Sidebar/> -->
    </div>
</template>

<script>
import Profile from '../components/Profile.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    name: 'Admin',
    components: {Sidebar, Profile}
}
</script>
<style scoped>

</style>