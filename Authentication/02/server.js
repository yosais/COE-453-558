const express = require('express')

const app = express()
const port = 3000

// Web pages
app.use(express.static('Pages'))

//Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    res.send({"Authenticated": true})
})

app.listen(port, () => console.log(`Application server listening on port ${port}`))