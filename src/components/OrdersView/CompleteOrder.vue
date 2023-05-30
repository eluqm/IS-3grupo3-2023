<template>
    <div class="order">
        <table>
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
.container {
  grid-template-columns: 14rem auto 23rem;
}

/*main*/

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
  padding: 0.1rem 0.5rem;
}

main table tbody tr:last-child td{
  border: none;
}

main table button{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
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
.right .top{
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}
.right .top button{
  display: none;
}
.right .top .theme-toggler{
  width: 4.2rem;
  height: 1.6rem;
  background: var(--color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: var(--border-radius-1);
  /*color: var(--color-dark);*/
}

.right .top .theme-toggler i{
  font-size: 1.2rem;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.right .top .theme-toggler i.active{
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: var(--border-radius-1);
}

.right .top .profile{
  display: flex;
  gap: 2rem;
  text-align: right;
}
.profile-photo{
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
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
</style>
