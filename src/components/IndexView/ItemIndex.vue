<template>
    <div class="dish">
        <img :src="item.image" alt="imagen">
        <div class="details">
            <p>{{item.name}}: {{item.description}}</p>
            <p>S/. {{item.price}}</p>
            <button class="" v-if="item.amount < 1" @click="changeAddItem(item, index)">Ordenar</button>
            <button v-else class="cancel" @click="changeCancelItem(item, index)">Cancelar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemIndex",
    props:{
        item : { type: Object, required: true},
        index:{type: Number, required: true},
        addItem: {type: Function, required: true},
        cancelItem: {type: Function, required: true}
    },
    data(){
        return {
            
        }
    },
    methods:{
        changeAddItem(item, index){
            this.addItem(item, index);
        },
        changeCancelItem(item, index){
            this.cancelItem(item, index);
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Suranna&display=swap');
.dish{
    width: 24rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: white;
    color: black;
    margin: 0.8rem 0;
    align-content: center;
    border-radius: 2rem;
    font-family: 'Suranna', serif;
    font-size: 1.2rem;
    line-height: 1;
}
.dish img{
    width: 20rem;
    height: 15rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
}
.dish .details{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-items: center;
    align-items: center;
    height: 4rem;
    font-weight: bold;
    padding: 0 0;
}
.dish .details button{
    background: rgb(97, 225, 97);
    color: white;
}
.dish .details button:hover{
    background: rgb(69, 225, 69);
    color: white;
}

.dish .details .cancel{
    background: rgb(243, 67, 67);
}
.dish .details .cancel:hover{
    background: rgb(236, 23, 23);
}

/*--------------------------------------------------------------------------------------*/
@media screen and (max-width: 700px){
.dish{
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    background: white;
    color: black;
    margin: 0.8rem 0;
    align-content: center;
    border-radius: 0rem;
    font-family: 'Suranna', serif;
    font-size: 1.2rem;
    line-height: 1;
}
.dish img{
    width: 100%;
    height: 15rem;
    border-radius: 0;
    margin-bottom: 0.5rem;
}
.dish .details{
    display: grid;
    grid-template-columns: auto 4rem 6rem;
    justify-items: center;
    align-items: center;
    height: 4rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 0 0.2rem;
}
.dish .details button{
    background: rgb(97, 225, 97);
    color: white;
}
.dish .details button:hover{
    background: rgb(69, 225, 69);
    color: white;
}

.dish .details .cancel{
    background: rgb(243, 67, 67);
}
.dish .details .cancel:hover{
    background: rgb(236, 23, 23);
}
}
</style>