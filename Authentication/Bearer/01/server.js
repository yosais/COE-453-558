const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3000

//Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/login', (req, res) => {
    const username = 'yosais'
    const password = 'pass123'

    if(username === req.body.username && password === req.body.password) {
        // Create Token
        const token = jwt.sign({userName: username}, 'SECRET', {expiresIn: '2h'})
        res.status(200).send({token: token})
    }
    else {
        res.status(401).send('Invalid credentials!')
    }

app.get('/sayHi', verifyToken, (req, res) => {
    console.log(req.decoded)
    res.status(200).send('Hi!')
})

function verifyToken(req, res, next) {
    let auth = req.headers.authorization
    if(auth){
        let bearer = auth.split(' ')
        let token = bearer[1]
        jwt.verify(token, "SECRET", (err, decoded) => {
            if(err){
                return res.send('Token is not valid!')
            }
            else {
                req.decoded = decoded
                next()
            }
        })
    } 
    else {
        res.status(403).send('You are forbidden!')
    }
}

})

app.listen(port, () => console.log(`Application server listening on port ${port}`))