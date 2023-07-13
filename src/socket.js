import { reactive } from "vue";
import {io} from "socket.io-client";
export const state = reactive({
  connected: false,
  //Variables para el Cliente
  //IndexView
  client_menu : {items : []}, // menu actualmente disponible para el cliente
  answer_order: {state : 0},
  //state 0: cuando no se muestra nada
  //state 1: Se acepto la orden
  //state 2: Se rechazo la orden
  //Variables para el Admin
  //MenuView
  menu: {}, // el menu en funcionamiento
  menus: [], //datos de menus para elegir
  //Dashboard
  summary_orders : [],


  
  items_from_menu:[],

  orders: [], /*cola de ordenes*/
  
  fooEvents: []/*este solo es para el ejemplo*/
});


// "undefined" means the URL will be computed from the `window.location` object
//const URL = process.env.NODE_ENV === "production" ? undefined : "http://127.0.0.1:5000/";
const URL =  "http://127.0.0.1:5000/";

//export const socket = socketIO(URL
export const socket = io(URL
  /*
  ,{
    withCredentials:true,
    allowedHeaders:{
      "Access-Control-Allow-Origin": "*"
    }
  }
  */
);

/*Connection*/

socket.on("connect", () => {
  state.connected = true;
});
socket.on("disconnect", () => {
  state.connected = false;
});

socket.on('order-updated', (orders) => {

  state.orders = JSON.parse(orders); // Convert the queue to an array for Vue reactivity
});

/*Cliente*/
//IndexView
socket.on("make-order", (food) => {
  state.orders.push(food);
  
});
//mostrar menu disponible
socket.on("get-ready-menu", (client_menu) => {
  state.client_menu = client_menu;
});

//socket.on("get-item-from-ready-menu", (item) => {
//  state.client_menu.items.push(item);
//});
socket.on("get-item-from-ready-menu", (item) => {
  state.client_menu.items[item.id_item] = item;
});
//recibit mensaje de respuesta
socket.on("answer-order", (answer_order) => {
  state.answer_order = answer_order;
  console.log("estoy en answer order", answer_order)
  if(answer_order.state === 1){
    socket.emit('get-complete-menu');
    /*
    console.log("se recibio orden, reducir amount", answer_order.items)
    answer_order.items.forEach(item => {
      console.log("item de for",item)
      console.log("state",state.menu)
      let index = state.menu.map(producto => producto.id_item).indexOf(item.id_item)
      console.log("index",state.menu.items[index])
      state.menu.items[index].amount -= item.amount
    });
    */
    
  }
  
});

/*Admin*/

//MenuView

socket.on("get-complete-menu", (menu) => {
  if(menu.name){
    console.log("Se recibio el menu completo")
    state.menu = menu;
  }
});
socket.on("get-menus", (menus) => {
  state.menus = menus;
});

socket.on("set-menu", (menu) => {
  state.menu = menu;
});

//dashboard
socket.on("get-summary", (summary) => {
  state.summary_orders = summary;
});

socket.on("get-summary-order", (summary) => {
  state.summary_orders.push(summary);
});


//orders
socket.on("get-all-order", (orders) => {
  state.orders = orders;
});

socket.on("get-order", (order) => {
  state.orders.push(order);
});


socket.on("get-items-from-menu", (items) => {
  state.items_from_menu = items;
});

socket.on("receive-order", (order) => {
  state.orders.push(order);
});

/*Exameple*/
socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});
