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
    let x = req.body.X
    let y = req.body.Y
    let result = Number( x ) + Number( y )
    console.log(result)
    res.send({"result": result})
})

app.listen(port, () => console.log(`Application server listening on port ${port}`))