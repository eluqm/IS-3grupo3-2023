import { reactive } from "vue";
//import socketIO from "socket.io-client";
import {io} from "socket.io-client";
export const state = reactive({
  connected: false,
  orders: [],
  barEvents: []
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

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on('order-updated', (orders) => {

  state.orders = JSON.parse(orders); // Convert the queue to an array for Vue reactivity
});

socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
  state.barEvents.push(args);
});