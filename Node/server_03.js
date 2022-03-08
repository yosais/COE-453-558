// Modules 
const express = require('express')
const app = express()
const port = 7000

// Global middleware
app.use(f1)

// Routes
app.get('/', (req, res, next) => {
    console.log('Root')
    res.send('Root')
    next()
})

// f2 exected after Route('/')
app.use(f2)

app.get('/users', (req, res) => {
    console.log('Users')
    res.send('Users')
})

function f1(req, res, next){
    console.log('function 1')
    next()
}

function f2(req, res){
    console.log('function 2')
}

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})