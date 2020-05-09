//client.js
var axios = require('axios');

axios.post('http://localhost:3333', { message: 'ola para todos conectados nesse socket', terminal: '11270055', alerta: 'news'});

axios.post('http://localhost:3333', { message: 'ola para todos menos para a sala news!', terminal: '11270055', alerta: ''})