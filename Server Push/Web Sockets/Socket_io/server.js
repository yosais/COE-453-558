const express = require('express')
const socket = require('socket.io')

// Setup your application server
const app = express()
const port = 3000
const server = app.listen(port, () => { 
    console.log(`Server running on port ${port}`)
})

// Folder containing static resources
app.use(express.static('client'))

// Setup WebSocket
const io = socket(server)


// Express Routes
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

// WebSocket handlers
io.on('connection', socket => {
    console.log('A new client connected!')

    socket.on('message', message => {
        io.emit('message', message)
    })
})