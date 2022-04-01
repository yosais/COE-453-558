const socket = io('ws://localhost:3000')

// Listen for messages
socket.on('message', function(text) {
   let e1 = document.createElement('li')
   e1.innerHTML = text
   document.querySelector('ul').appendChild(e1)
})

// Send messages
document.querySelector('button').onclick = () => {
    let text = document.querySelector('input').value
    socket.emit('message', text)
}