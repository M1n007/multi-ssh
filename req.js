// const request = require("request");
// const fs = require("fs");
// const fsi = require("async-file");
// const delay = require("delay");

// fs.readFile("ip.txt", async function(err, data) {
//   if (err) throw err;
//   const array = data
//     .toString()
//     .replace(/\r\n|\r|\n/g, " ")
//     .split(" ");

//   for (i in array) {
//     const params = {
//       method: "GET",
//       url: "https://www.facebook.com/",
//       proxy: `http://?@${array[i]}:8674`
//     };

//     await request(params, async (err, result) => {
//       if (err) throw err;

//       if (result.statusCode === 200) {
//         fsi.appendFile("save.txt", `${array[i]}\n`, "utf-8");
//         console.log(array[i] + " " + "Code :" + " " + result.statusCode);
//       }
//     });
//     await delay(5000);
//   }
// });
