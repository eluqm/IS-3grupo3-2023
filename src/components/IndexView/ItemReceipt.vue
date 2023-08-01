<template>
    <div class="item">
        <p>{{this.item.name}}</p>
        <p>{{this.item.description}}</p>
        <p>S/. {{item.price}}</p>
        <p></p>
        <div class="amount">
            <button>-</button>
            <p>{{this.item.amount}}</p>
            <button>+</button>
        </div>
        <p>S/. {{this.item.amount * this.item.price}}</p>
    </div>
</template>

<script>
export default {
    name: "ItemReceipt",
    props:{
        item : { type: Object, required: true}
    },
    methods:{
    }

}
</script>

<style scoped>
.item{
    margin-top: 1rem;
    color: black;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    gap: 1rem;
}

.item .data{
    
}

.item .data2{
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1rem;
}

.item .amount{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</style>