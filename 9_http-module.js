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
