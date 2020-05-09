//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3333', {reconnect: true});

//Logando no servidor
socket.emit('connectRoom', '11270055');
  
//Sala especifica de News que estou escutando
socket.on('news', data => {
  console.log(' ');
  console.log("Mensagem direcionada para a sala news:");
  console.log(data);
})