const http = require('http');

const server = http.createServer((req, res) => {
  const responseBody = 'Hello, world!';
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': responseBody.length // Correct length
  });
  res.end(responseBody);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});