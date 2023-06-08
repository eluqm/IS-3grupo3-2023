<template>
    <router-link :to="to" class="a" :class="{ active: isActive}">
        <i class="material-symbols-sharp">{{icon}}</i>
        <h3>{{name}}</h3>
    </router-link>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

export default {
    props: {
        to: {type: String, required: true},
        name: {type: String , required: true},
        icon: {type: String, required: true}
    },
    setup(props){
        const route = useRoute();
        const isActive = computed(()=> route.path === props.to)
        return {
            isActive
        }
    }
}
</script>
<style scoped>
.a{
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
.a i{
  transition: all 300ms ease;
}
.a.active{
  background-color: var(--color-white);
  color: var(--color-primary);
  margin-left: 0rem;
}

.a.active::before{
  content: '';
  height: 100%;
  width: 6px;
  background: var(--color-primary);
}
.a:hover{
  /*color: var(--color-primary);*/
}
.a:hover i{
  margin-left: 1rem;                                                                                
}
</style>