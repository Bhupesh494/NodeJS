const fs = require("fs");

// * reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// console.log("line after fs.readfiles");

// * writing files
// fs.writeFile("./docs/blog1.txt", "hello world bhupesh", () => {
//   console.log("file has been written");
// });

// fs.writeFile("./docs/blog2.txt ", "hello world sourabh", () => {
//   console.log("file has been written if it doesn't exist create one for me");
// });

// * directories creating and deleting
// if (fs.existsSync("./assets")) {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("deleted assets folder");
//   });
// } else {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("created assets folder");
//   });
// }

// * deleting files
if (fs.existsSync("./docs/blog2.txt")) {
  fs.unlink("./docs/blog2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("deleted blog2.txt");
  });
}
