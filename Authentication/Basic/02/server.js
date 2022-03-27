const express = require('express')
const basicAuth = require('express-basic-auth')

const app = express()
const port = 3000


// Web pages
app.use(express.static('Pages'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Middleware
app.use(basicAuth({
    users: { 'yosais': 'pass12' }
}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/add', (req, res) => {
    let x = req.body.x
    let y = req.body.y
    let result = x + y
    res.send({"result": result})
})

app.listen(port, () => console.log(`Application server listening on port ${port}`))