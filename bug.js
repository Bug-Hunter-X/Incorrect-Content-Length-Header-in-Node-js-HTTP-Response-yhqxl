const http = require('http');

const server = http.createServer((req, res) => {
  // Uncommon bug: Incorrect Content-Length header
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': 10 // Incorrect length
  });
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});