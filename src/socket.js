import { reactive } from "vue";
import {io} from "socket.io-client";
export const client_menu = reactive({
  items: {},
  table: 0,
  answer_order: {state : 0},
  count_selected : 0,
});
export const state = reactive({
  //Variables para el Admin
  //MenuView
  menu: {}, // el menu en funcionamiento
  menus: [], //datos de menus para elegir

  
  //connected: false,
  //Variables para el Cliente
  //IndexView
  //client_menu : {items : []}, // menu actualmente disponible para el cliente
  //answer_order: {state : 0},
  //state 0: cuando no se muestra nada
  //state 1: Se acepto la orden
  //state 2: Se rechazo la orden
  
  //Dashboard
  summary_orders : [],
  //Orders
  waiting: [],
  preparating: [],
  //Finished Orders
  ready : [],
  commited: [],


  frequency : []
  
  //items_from_menu:[],

  //orders: [], /*cola de ordenes*/
  
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

//Admin
//MenuView

socket.on("get-complete-menu", (new_menu) => {
  console.log("menu actualizado",new_menu);
  state.menu = new_menu;
});

socket.on("get-menus", (menus) => {
  state.menus = menus;
});

//mostrar menu disponible
socket.on("get-ready-menu", (menu) => {
  client_menu.items = menu;
});
socket.on("add-item-to-ready-menu", (item) => {
  client_menu.items[item.id_item] = item;
});

//recibit mensaje de respuesta
socket.on("answer-order", (answer_order) => {
  client_menu.answer_order = answer_order;
  console.log("estoy en answer order", answer_order)
  if(answer_order.state === 1){
    console.log("Entre al if de anser order")
    socket.emit('get-complete-menu');
  }
});


//dashboard
socket.on("get-summary", (summary) => {
  state.summary_orders = summary;
});

socket.on("get-summary-order", (summary_order) => {
  state.summary_orders.unshift(summary_order);
});


//frequency
socket.on("set-frequency", (new_frequency) => {
  state.frequency = new_frequency;
});

//orders
socket.on("get-all-waiting-order", (orders) => {
  state.waiting = orders;
});
socket.on("get-waiting-order", (order) => {
  state.waiting.push(order);
});

socket.on("get-all-preparating-order", (orders) => {
  state.preparating = orders;
});

socket.on("get-ready-order", (order) => {
  console.log("order llegada", order)
  state.ready.push(order);
  console.log("socket, ready", state.ready)
});

socket.on("get-all-ready-order", (orders) => {
  state.ready = orders;
});
socket.on("get-all-commited-order", (orders) => {
  state.commited = orders;
});




//Cliente
//IndexView

//Connection
/*
socket.on("connect", () => {
  state.connected = true;
});
socket.on("disconnect", () => {
  state.connected = false;
});



socket.on("make-order", (food) => {
  state.orders.push(food);
  
});


//socket.on("get-item-from-ready-menu", (item) => {
//  state.client_menu.items.push(item);
//});






socket.on("set-menu", (menu) => {
  state.menu = menu;
});







socket.on("get-items-from-menu", (items) => {
  state.items_from_menu = items;
});

socket.on("receive-order", (order) => {
  state.orders.push(order);
});

*/