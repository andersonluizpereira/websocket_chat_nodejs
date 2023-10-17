const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (event) => {
  const message = document.createElement('p');
  message.textContent = event.data
  document.getElementById('chat').appendChild(message);
};

function sendMessage() {
  const messageInput = document.getElementById('message');
  const message = messageInput.value;
  ws.send(message);
  messageInput.value = '';
}