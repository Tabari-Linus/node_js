const http = require('http');

const server = http.createServer(( request, response)=>{

    // console.log('headers',request.headers);
    console.log('Method',request.method);
    console.log('url',request.url);
    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Hellooooo</h1>');

    const user ={
        name: "John",
        hobby: 'Basketball'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000)