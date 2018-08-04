const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  res.statusCode = 200;
  // Content Type: text/plain
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body as "Hello World"
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  // Console will print the message
  console.log(`Server running at http://${hostname}:${port}/`);
});
