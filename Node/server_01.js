const express = require('express');
const app = express();
const port = 7000

// Home Route
app.get('/', (req, res) => {
  res.send('Home Route')
})

// MPA (return a web page)
app.get('/file', (req, res) => {
    res.sendFile( __dirname + "/page_01.html" )
  })

// SPA (return a JSON object)
app.get('/json', (req, res) => {
    res.json( {"name": "Ali Ahmad", "id": 12345678} )
  })

// Route parameters
  app.get('/lamps/:room/:id', (req, res) => {
    let lamp_room = req.params.room
    let lamp_id = req.params.id
    res.send( `Getting state of lamp ${lamp_id} in room ${lamp_room}`)
  })

// Query parameters
// app.get('/add', (req, res) => {
//     // Convert number from string to integer
//     let num1 = Number(req.query.num1)
//     let num2 = Number(req.query.num2)
//     res.send( `Sum = ${num1 + num2}`)
//   })

  app.get('/add/:num1/:num2', (req, res) => {
    // Convert number from string to integer
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    res.send( `Difference = ${num1 + num2}`)
  })

  app.use(express.json())
  app.get('/add', (req, res) => {
    let num1 = Number( req.body.num1 )
    let num2 = Number( req.body.num2 )
    res.send( `Sum = ${num1 + num2}`)
  })

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})