const http = require("http");

const server = http.createServer((req, res) => {
  // req and res is to object
  if (req.url === "/") {
    res.end("Home hello Page");
  } else if (req.url === "/about") {
    res.end("about page");
  } else if (req.url === "/contact") {
    res.end("contact page");
  } 
//   else {
//     res.statusCode = 404;
//   }
  res.end(`
  <h1>Opps!</h1>
  <p>Resource not found </p>
  <a href="/">Go Back Home</a>
  `) // if any resource not found this will show the message
});

server.listen(5000);


// const http = require('http');

// const port = 5000;

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

// server.listen(port, ()=>{
//     console.log(`http://localhost:${port}`);
// })
