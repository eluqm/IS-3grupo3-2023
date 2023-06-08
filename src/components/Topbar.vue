<template>
    <div class="topbar">
        <Profile/>
    </div>
</template>
<script>
import Profile from '../components/Profile.vue'
export default {
    name : 'Topbar',
    props: {
        title: String
    },
    components: {Profile}
}
</script>

<style scoped>
.topbar {
    width: 100%;
    height: 5rem;
    background: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 4rem;
}
</style>