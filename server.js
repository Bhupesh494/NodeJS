const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});
server.listen(3000, "localhost", () => {
  console.log("server is running on port 3000");
});
