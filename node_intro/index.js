const http = require("node:http");

const port = "3000";

const server = http.createServer((req, res) => {
 const birthdate="Hello, my birthdate is " +new Date('07/05/1999').toDateString()
 res.end(birthdate)
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
