# websocket_chat_nodejs
#Vou explicar o código passo a passo:

Passo 1: Configurar o ambiente
Neste passo, você deve ter o Node.js instalado em seu sistema e uma pasta para o projeto.

Passo 2: Instalar a biblioteca "ws"
Aqui, você está usando o npm (Node Package Manager) para instalar a biblioteca "ws", que é uma biblioteca que permite a comunicação WebSocket em Node.js.

Passo 3: Criar o servidor WebSocket
Aqui, você está criando o servidor WebSocket em Node.js. O servidor WebSocket usa a biblioteca "ws" para configurar o WebSocket. Aqui estão os principais elementos do código:

- `const WebSocket = require('ws');`: Isso importa a biblioteca "ws".

- `const http = require('http');`: Você também está importando o módulo HTTP, que será usado para criar um servidor HTTP simples para servir a página HTML do chat.

- `const express = require('express');`: O módulo Express.js é usado para criar um servidor HTTP que servirá a página HTML.

- `app.get('/', (req, res) => { ... });`: Isso define uma rota para servir a página HTML quando um cliente acessa a raiz do servidor.

- `const wss = new WebSocket.Server({ server });`: Aqui, você cria uma instância de um servidor WebSocket, passando o servidor HTTP que você criou com o Express.

- `wss.on('connection', (ws) => { ... });`: Isso define um ouvinte de eventos que é acionado quando um cliente se conecta ao servidor WebSocket. Ele cria uma instância WebSocket para cada cliente conectado.

- `ws.on('message', (message) => { ... });`: Isso define um ouvinte de eventos que é acionado quando um cliente envia uma mensagem. O servidor retransmite a mensagem para todos os clientes conectados.

Passo 4: Criar a interface de usuário HTML
Neste passo, você está criando uma página HTML simples para a interface do chat. Aqui estão os principais elementos do código:

- `const ws = new WebSocket('ws://localhost:8080');`: Isso cria uma instância de WebSocket no cliente, conectando-o ao servidor WebSocket que está ouvindo na porta 8080.

- `ws.onmessage = (event) => { ... };`: Isso define um ouvinte de eventos no cliente para lidar com mensagens recebidas do servidor. Ele adiciona cada mensagem à caixa de chat na página.

- A função `sendMessage()`: Essa função é chamada quando o usuário clica no botão "Enviar". Ela obtém o valor da caixa de entrada de mensagens, envia a mensagem para o servidor WebSocket e, em seguida, limpa a caixa de entrada.

Passo 5: Iniciar o servidor
Por fim, você inicia o servidor Node.js com `node server.js` e acessa o chat em seu navegador em http://localhost:8080.