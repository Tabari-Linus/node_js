const express = require('express')

const app = express();

app.use((req, res, next)=>{
    console.log("<h1>Welcome to the first </h1>")
    next()
})

app.get('/',(req, res)=>{
    res.send("Testest")
})

app.listen(3000)