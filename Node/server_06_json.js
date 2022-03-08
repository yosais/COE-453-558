const express = require('express')
const app = express()
const port = 7000

// Use the json middleware
app.use(express.json())

app.get('/student', (req, res) => {
    let name = req.body.name
    let id = req.body.id
    let courses = req.body.courses
    res.send( `Name: ${name}, ID: ${id}, Courses: ${courses}`)
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})

