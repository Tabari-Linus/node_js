const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.get('/:id', (req, res)=>{
    // console.log(req.query)
    // console.log(req.header)
    // console.log(req.params)
    res.status(400).send("not found")
    res.send('Getting root')
})

app.listen(3000); 