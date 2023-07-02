<template>
    <div class="order">
        <table class="table-waiting-orders">
            <thead>
                <tr>
                    <th>Mesa: 12</th>
                    <th>Hora: 15:35</th>
                    <th></th>
                    <th>
                      <button @click="setAccordion" class="accordion">
                        +
                      </button>
                    </th>
                </tr>
            </thead>
            <tbody v-show="accordionVisible">
                <tr>
                  <td>Fuente Mixta 2</td>
                  <td>Papas, Lechon de hcnacho, sarza de senca,
                     mas coasas, mas cosas, mas cosas, mas cosas</td>
                  <td>1</td>
                  <td class="primary">Seleccionar</td>
                </tr>
                <tr>
                  <td>Fuente 4</td>
                  <td>Papas, Lechon de hcnacho, sarza de senca,
                     mas coasas, mas cosas, mas cosas, mas cosas</td>
                  <td>1</td>
                  <td class="primary">Seleccionar</td>
                </tr>
                <tr>
                  <td>Caldo de Lomo</td>
                  <td>Papas, Lechon de hcnacho, sarza de senca,
                     mas coasas, mas cosas, mas cosas, mas cosas</td>
                  <td>2</td>
                  <td class="primary">Seleccionar</td>
                </tr>
            </tbody>
        </table>
      </div>
</template>

<script>

export default {
    name: 'CompleteOrder',
    data(){
        return {
            accordionVisible : false
        }
    },
    methods:{
        setAccordion: function(event){
            console.log("Entre");
            this.accordionVisible = !this.accordionVisible;
            console.log(this.accordionVisible)
        }
    },
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

table{
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  width: 100%;
  padding: var(--card-padding);
  box-shadow: var(--box-shadow);
  align-items: center;
  transition: all 300ms ease;
}

table:hover{
  box-shadow: none;
}

table tbody td{
  height: 2.8rem;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
  text-align: center;
  padding: 0.1rem 0.5rem;
}

table tbody tr:last-child td{
  border: none;
}

th:nth-child(1),
td:nth-child(1) {
  width: 8rem;
}
th:nth-child(2),
td:nth-child(2) {
  width: auto;
}

/* Define el ancho de la tercera columna */
th:nth-child(3),
td:nth-child(3) {
  width: 4rem;
}
th:nth-child(4),
td:nth-child(4) {
  width: 8rem;
}

table button{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
a{
  text-align: center;
  margin: 1rem auto;
  color: var(--color-primary);
  display: block;
}



</style>
