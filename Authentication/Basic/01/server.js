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

app.post('/add', (req, res) => {
    let auth = req.get("authorization")
    console.log(auth)

    // Reover username and password
    let username_password = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString()
    let username = username_password.split(":")[0]
    let password = username_password.split(":")[1]
    console.log('Username: ' + username)
    console.log('Password: ' + password)

    let x = req.body.x
    let y = req.body.y
    let result = x + y
    res.send({"result": result})
})

app.listen(port, () => console.log(`Application server listening on port ${port}`))