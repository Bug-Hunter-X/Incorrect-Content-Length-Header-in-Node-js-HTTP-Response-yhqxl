# Incorrect Content-Length Header in Node.js HTTP Response

This repository demonstrates an uncommon bug in Node.js where an HTTP server sends an incorrect `Content-Length` header in its response. This can lead to unexpected behavior in clients, potentially causing data truncation or extra data being received.

## Bug Description
The server in `bug.js` sets the `Content-Length` header to an incorrect value (10), while the actual response body ('Hello, world!') is 13 bytes long. This discrepancy causes issues for clients expecting a specific content length.

## Solution
The `bugSolution.js` file provides a corrected version.  It accurately calculates and sets the `Content-Length` header, ensuring clients receive the complete and expected response.

## How to Reproduce
1. Clone the repository.
2. Run `node bug.js`. 
3. Use a tool like `curl` or a browser to make a request to `http://localhost:3000`. Observe the response and potential issues.
4. Run `node bugSolution.js`.  Make another request using the same tool; the response will be correct now.

This example highlights the importance of accurately setting HTTP headers and demonstrates a subtle bug that might be difficult to identify without careful testing.