import { reactive } from "vue";
import {io} from "socket.io-client";
export const state = reactive({
  connected: false,
  //Variables para el Cliente
  //Variables para el Admin
  menus: [],
  items_from_menu:[],

  orders: [], /*cola de ordenes*/
  menu: {},
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
socket.on("get-menus", (menus) => {
  state.menus = menus;
});
socket.on("receive-menu", (menu) => {
  state.menu = menu;
});
socket.on("make-order", (food) => {
  state.orders.push(food);
});

/*Admin*/
socket.on("receive-order", (food) => {
  state.orders.push(food);
});

/*Exameple*/
socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});
