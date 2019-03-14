const fs = require("fs");

module.exports = file => {
  return new Promise((resolve, reject) => {
    // const dir = fs.readFileSync("./" + file, "utf-8");

    // resolve(dir);
    fs.readFile(file, function(err, data) {
      if (err) throw err;
      const array = data
        .toString()
        .replace(/\r\n|\r|\n/g, " ")
        .split(" ");

      const IpArr = [];
      for (i in array) {
        IpArr.push(array[i]);
      }

      resolve(IpArr);
    });
  });
};
