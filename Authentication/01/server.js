const express = require('express')
const path = require('path')

const app = express()
const port = 7000

// folder containing static Web pages
app.use(express.static('Pages'))

// 
app.use(express.urlencoded({extended: false}))

app.post('/login', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    res.redirect('/index.html')
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})