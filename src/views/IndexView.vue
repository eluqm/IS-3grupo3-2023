<template>
    <div class="container">
      <div class="presentation">
        <div class="title">
          <p>Bievenido</p>
          <p>a</p>
        </div>
        <div class="logo">
          <i class="material-symbols-sharp">restaurant_menu</i>
          <div class="right">
            <p class="name">E-restaurant</p>
            <p class="slogan">Mindless, simplest, fastest</p>
          </div>
        </div>
        <div class="description">
          <p>El mejor lugar</p>
          <p>para</p>
          <p class="bold">ORDENAR RAPIDO</p>
          <p>o</p>
          <p>disfrutar de</p>
          <p>una</p>
          <p class="bold">RESERVACIÓN</p>
        </div>
        <div class="options">
          <button class="slider">Ir a Ordernar</button>
          <button class="slider">Ir a reservaciones</button>
        </div>
      </div>
      <div class="orders">
        <div class="instructions">
          <h1>Ordene lo que desee</h1>
          <hr>
          <h2>Seleccione los platos y bebidas que desee ordenar</h2>
          <h2>Luego presione el boton </h2>
        </div>
        <div class="btn-receipt">
          <i class="material-symbols-sharp btn-receipt">receipt_long</i>
        </div>
        <div class="menu">
          <div class="dish">
            <img src="../assets/lomo_saltado.jpg" alt="imagen">
            <div class="details">
              <p>Lomo saltado: carne tierna juntos con papas fritas, acompañado de arroz</p>
              <p>S/. 18.00</p>
              <button @click="send_order">Ordenar</button>
            </div>
          </div>
          <div class="dish">
            <img src="../assets/lomo_saltado.jpg" alt="imagen">
            <div class="details">
              <h4>Lomo saltado: carne tierna juntos con papas fritas, acompañado de arroz</h4>
              <h3>S/. 18.00</h3>
              <button @click="send_order">Ordenar</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div>
      <button @click="send_order">Enviar orden</button>
    </div>
    
</template>

<script>
import { socket } from '@/socket'
export default {
name: 'HomeView',
components: {
},
methods:{
  send_order(){
    socket.emit("handle-order", { msg : 'este es un mensaje'})
  }
}
}
</script>

<style scoped>
/*Estos dos estabana afuera*/
.logo{
  margin: 2rem;   
}
.options{
  display: flex;
  justify-content: space-around;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: rgb(236,33,19);
    background: linear-gradient(90deg, rgba(236,33,19,1) 0%, rgba(242,112,53,1) 40%, rgba(255,218,0,1) 100%);
    color: white;
  }
  .presentation{
    width: 100vw;
    height: 100vh;
  }

@import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope');
  .presentation .title p{
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }

  .presentation .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;
    padding: 0.5rem;
  }
  .presentation .logo i{
    font-weight: bold;
    font-size: 7rem;
  }
  .presentation .logo .right{
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .presentation .logo .right .name{
    font-weight: bold;
    font-size: 3rem;
    width: 100%; /* Hace que el texto ocupe todo el ancho disponible */
    white-space: nowrap; /* Evita el salto de línea automático */
    /*overflow: hidden; *//* Oculta cualquier contenido que desborde */
    text-overflow: ellipsis;
    text-align: justify;
    letter-spacing: -3px; /* Ajusta el espaciado entre letras */
  }
  .presentation .logo .right .slogan{
    font-weight: bold;
    font-size: 1.5rem;
    width: 100%; /* Hace que el texto ocupe todo el ancho disponible */
    white-space: nowrap; /* Evita el salto de línea automático */
    /*overflow: hidden; *//* Oculta cualquier contenido que desborde */
    text-overflow: ellipsis;
    text-align: justify;
    letter-spacing: -1px; /* Ajusta el espaciado entre letras */
  }

  .presentation .description{
    font-size: 2rem;
    display: flex;
    flex-direction: column;
  }
  .presentation .description p{
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }
  .presentation .options{
    margin-top: 3rem;
  }

  .presentation .options button{
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.presentation .options button:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  }

  .instructions{
    margin: 1rem 2rem;
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: left;
    font-size: 25px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }
  .dish{
    display: block;
    padding: 0;
    background: white;
    color: black;
    margin: 0.8rem 0;
  }
  .dish .details{
    display: grid;
    grid-template-columns: auto 5rem 8rem;
    justify-items: center;
    align-items: center;
    height: 4rem;
    font-size: 1rem;
    font-weight: bold;
  }
  .dish .details button{
    background: rgb(97, 225, 97);
    color: white;
  }
  .dish .details button:hover{
    background: rgb(69, 225, 69);
    color: white;
  }

  .btn-receipt{
    position: sticky;
    top: 40rem;
    left: 32rem;
    width: 4rem;
    height: 4rem;
    color: black;
    background: rgb(0, 255, 213);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
  }
/*Este e sun ejemplo de como se deben realizar las media queries*/
/*=====MEDIA QUERIES ===========*/
@media screen and (max-width: 700px){
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: rgb(236,33,19);
    background: linear-gradient(90deg, rgba(236,33,19,1) 0%, rgba(242,112,53,1) 40%, rgba(255,218,0,1) 100%);
    color: white;
  }
  .presentation{
    width: 100vw;
    height: 100vh;
  }

@import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope');
  .presentation .title p{
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }

  .presentation .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;
    padding: 0.5rem;
  }
  .presentation .logo i{
    font-weight: bold;
    font-size: 7rem;
  }
  .presentation .logo .right{
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .presentation .logo .right .name{
    font-weight: bold;
    font-size: 3rem;
    width: 100%; /* Hace que el texto ocupe todo el ancho disponible */
    white-space: nowrap; /* Evita el salto de línea automático */
    /*overflow: hidden; *//* Oculta cualquier contenido que desborde */
    text-overflow: ellipsis;
    text-align: justify;
    letter-spacing: -3px; /* Ajusta el espaciado entre letras */
  }
  .presentation .logo .right .slogan{
    font-weight: bold;
    font-size: 1.5rem;
    width: 100%; /* Hace que el texto ocupe todo el ancho disponible */
    white-space: nowrap; /* Evita el salto de línea automático */
    /*overflow: hidden; *//* Oculta cualquier contenido que desborde */
    text-overflow: ellipsis;
    text-align: justify;
    letter-spacing: -1px; /* Ajusta el espaciado entre letras */
  }

  .presentation .description{
    font-size: 2rem;
    display: flex;
    flex-direction: column;
  }
  .presentation .description p{
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }
  .presentation .options{
    margin-top: 3rem;
  }

  .presentation .options button{
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.presentation .options button:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  }

  .instructions{
    margin: 1rem 2rem;
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: left;
    font-size: 25px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }
  .dish{
    display: block;
    padding: 0;
    background: white;
    color: black;
    margin: 0.8rem 0;
  }
  .dish .details{
    display: grid;
    grid-template-columns: auto 5rem 8rem;
    justify-items: center;
    align-items: center;
    height: 4rem;
    font-size: 1rem;
    font-weight: bold;
  }
  .btn-receipt{
    position: sticky;
    top: 40rem;
    left: 32rem;
    width: 4rem;
    height: 4rem;
    color: black;
    background: rgb(0, 255, 213);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
  }
  
}
</style>
  