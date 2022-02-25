const http = require('http');

const server = http.createServer();

server.on('request', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.on('listening', function(){
    console.log('Server running!');
});

server.listen(3000);