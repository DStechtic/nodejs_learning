const http = require("node:http");

const port = "3000";

const server = http.createServer((req, res) => {
  res.end("5 july 1999");
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
