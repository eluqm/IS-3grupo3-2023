<template>
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
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope');
.presentation{
    width: 100vw;
    height: 100vh;
}

.presentation .title{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}
.presentation .title p{
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: center;
    font-size: 3.2rem;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
    padding: 0rem;
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
font-size: 2.4rem;
display: flex;
flex-direction: column;
margin-top: 1rem;
}
.presentation .description p{
font-family: "Annie Use Your Telescope", cursive;
font-weight: bold;
text-align: center;
color: rgb(255, 255, 255);
background-color: transparent;
text-shadow: rgb(0, 0, 0) -4px 4px 3px;
}
.presentation .options{
    display: flex;
    justify-content: space-around;
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

/*---------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 700px){
.presentation{
    width: 100vw;
    height: 100vh;
  }

  .presentation .title p{
    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-shadow: rgb(0, 0, 0) -4px 4px 3px;
  }

  .presentation .description{
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

}
</style>