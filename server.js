const WebSocket = require('ws');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Novo cliente conectado');

  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        //Aqui eu converti de buffer para texto, onde 'e mais facil de receber os dados
        client.send(JSON.stringify(message.toString()));
      }
    });
  });
});

server.listen(8080, () => {
  console.log('Servidor WebSocket está ouvindo na porta 8080');
});
