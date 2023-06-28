import { reactive } from "vue";
import {io} from "socket.io-client";
export const state = reactive({
  connected: false,
  //Variables para el Cliente
  client_menu : {items : []},
  //Variables para el Admin
  menu: {},



  menus: [],
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

/*Cliente*/
socket.on("receive-menu", (menu) => {
  state.menu = menu;
});
socket.on("make-order", (food) => {
  state.orders.push(food);
});
socket.on("get-ready-menu", (client_menu) => {
  state.client_menu = client_menu;
});
socket.on("get-item-from-ready-menu", (item) => {
  state.client_menu.items.push(item);
});

/*Admin*/
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

socket.on("get-items-from-menu", (items) => {
  state.items_from_menu = items;
});

socket.on("receive-order", (food) => {
  state.orders.push(food);
});

/*Exameple*/
socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});
