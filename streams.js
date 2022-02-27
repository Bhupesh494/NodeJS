const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog5.txt");

// readStream.on("data", (chunk) => {
//   console.log(`------New chunk------`);
//   console.log(chunk);
//   writeStream.write(`\nNew Chunk\n`);
//   writeStream.write(chunk);
// });

// * Piping (Achieve the same as above)
readStream.pipe(writeStream);
