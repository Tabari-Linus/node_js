const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    res.send('Getting root')
})

app.get('/profile', (req, res)=>{
    res.send('Getting profile')
})

app.post('/profile', (req, res)=>{
    console.log(req.body)
    const user = {
        name: 'Dee😍',
        hobby: 'Dancing'
    }
    res.send(JSON.stringify(req.body))
})
app.listen(3000); 