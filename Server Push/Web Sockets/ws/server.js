const express = require('express')
const ws = require('ws')

// Setup your application server
const app = express()
const port = 3000
const server = app.listen(port, () => { 
    console.log(`Server running on port ${port}`)
})

// Folder containing static resources
app.use(express.static('client'))

// Setup WebSocket
const wsServer = new ws.Server({ server: server })


// Express Routes
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

// WebSocket handlers
wsServer.on('connection', function connection(socket) {
    console.log('A new client connected!')
    socket.on('message', message => {
        console.log('Message received: ', message.toString())
        socket.send('Hello client!')
    })
})