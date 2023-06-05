class socketIODto{
  message;
  test;
  genres;

  constructor(data)
  {
    this.message = data.message;
    this.test = data.test;
    this.genres = data.genres;
  }
}

const socket = io("http://localhost:3000/game");
        
const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSendGameMSG = () => {
  socket.emit('message-games', { message: message.value, test: "test" })
};

socket.on('message-games', ( data ) => {
  console.log(data);
  handleNewMessage(data);
});

const handleNewMessage = ( data ) => {
  messages.appendChild(buildNewMessage(data.message));
};

const buildNewMessage = ( message ) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  return li;
}