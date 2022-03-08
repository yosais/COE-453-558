// Modules 
const express = require('express')
const app = express()
const port = 7000

// Routes
app.get('/', f1, f2, (req, res, next) => {
    console.log('Root')
    res.send('Root')
    next()
})

app.get('/users', f1, (req, res) => {
    console.log('Users')
    res.send('Users')
})

function f1(req, res, next){
    console.log('function 1')
    next()
}

function f2(req, res, next){
    console.log('function 2')
    next()
}

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})