const express = require('express')
const app = express()

const port = 3000

app.use(express.static('Client'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/stream', (req, res) => {
    console.log('Client connected!')

    res.setHeader('Content-Type', 'text/event-stream')

    // Send data every 1 second
    const intervalId = setInterval( () => {
        const date = new Date().toLocaleString()
        res.write(`data: ${date}\n\n`)
        res.write(`event: update\ndata: Update: ${date}\n\n`)
        res.write(`event: update\ndata: Warning: ${date}\n\n`)
    }, 1000)

    res.on('close', () => {
        console.log('Client closed connection!')
        clearInterval(intervalId)
        res.end()
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})