const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from Docker!'))

app.listen(3000, () => {
    console.log('Applicaiton is running on port 3000')
})