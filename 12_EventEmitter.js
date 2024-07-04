const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age)=>{
  console.log(`age of ${name} is ${age}`)
})

//it not compulsory to access a argument 
customEmitter.on('response', ()=>{
  console.log(`some other logic`)
})

//order matters first need to be event callback and then emitter 
//we can also pass the agrument to this emit and access it to callback
customEmitter.emit('response', 'ronak', 20)

const http = require('http');

const port = 5000;

// const server = http.createServer((req,res)=>{
//     // console.log("resquest");
//     res.writeHead(200,{'Content-Type':'text/html'});
//     if(req.url === "/"){
//         res.end("<h1>Hello World</h1><a href='/about'>About</a>");
//     } else if(req.url === '/about'){
//         res.end("<h1>Hello About</h1> <a href='/'>Home</a>");
//     } else {
//         res.end("<h1>404</h1> <a href='/'>Home</a>");
//     }
// })

const server = http.createServer();

server.on('request', (req, res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end("Welcome")
})

server.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
