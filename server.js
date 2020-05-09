const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

//conectando usuario no servidor
io.on('connection', socket => {
  //Conection
  socket.on('connectRoom', terminal => {
    console.log(' ');
    console.log('logado na room Id: ', terminal);
    socket.join(terminal);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Logando atividadas nas salas e pessoas conectadas.
app.use((req, res, next) => {
  console.log(' ')
  console.log('message: '+req.body.message)
  console.log('alertName: '+req.body.alerta)
  console.log('room id: '+req.body.terminal)
  io.sockets.in(req.body.terminal).emit(req.body.alerta, req.body.message);

  return res.sendStatus(200);
});

// Conectando servidor no ar
app.listen(3000, function() {
  console.log(' ');
  console.log("Server online!");
});

server.listen(3333);