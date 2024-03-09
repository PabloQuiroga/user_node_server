const express = require('express')
const app = express()

app.listen(5001, function(){
    console.log("Server Node se esta ejecutando correctamente")
})

app.get('/', (req, res) => {
    res.end("Welcome to my first Node Server")
})