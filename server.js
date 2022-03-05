const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  //   if (req.url === "/") {
  //     fs.readFile("./views/index.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         res.end();
  //       }
  //       res.end(data);
  //     });
  //   } else if (req.url === "/about") {
  //     fs.readFile("./views/about.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         res.end();
  //       }
  //       res.end(data);
  //     });
  //   } else {
  //     fs.readFile("./views/error.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         res.end();
  //       }
  //       res.end(data);
  //     });
  //   }
  // });

  // routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "error.html";
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is running on port 3000");
});
