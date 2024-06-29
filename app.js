const http = require('http');

const port = 5000;

const server = http.createServer((req,res)=>{
    // console.log("resquest");
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url === "/"){
        res.end("<h1>Hello World</h1><a href='/about'>About</a>");
    } else if(req.url === '/about'){
        res.end("<h1>Hello About</h1> <a href='/'>Home</a>");
    } else {
        res.end("<h1>404</h1> <a href='/'>Home</a>");
    }
})

server.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
