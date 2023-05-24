<template>
    <div class="home">
        <h1>Index</h1>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
name: 'HomeView',
components: {
    HelloWorld
}
}
</script>

<style scoped>
/*Este e sun ejemplo de como se deben realizar las media queries*/
/*=====MEDIA QUERIES ===========*/
@media screen and (max-width: 700px){
  .container{
    width: 90%;
    grid-template-columns: 1fr;
    margin: 0 auto 0 ;
  }
}
</style>
  