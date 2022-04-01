 const socket = new WebSocket('ws://localhost:3000')

 // Open connection
 socket.addEventListener('open', function(event) {
     console.log('Connected to server!')
     socket.send('Hello server!')
 })

 // Listen for messages
 socket.addEventListener('message', function(event) {
    console.log('Message from server: ', event.data)
 })