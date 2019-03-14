const SSH = require("simple-ssh");
const colors = require("./colors");
const delay = require("delay");

module.exports = (ip, pass, command) => {
  return new Promise((resolve, reject) => {
    console.log(colors.FgBlue, "Wait until proccess done...", colors.Reset);
    console.log("");
    (async () => {
      await ip.map(ip => {
        const ssh = new SSH({
          host: ip,
          user: "root",
          pass: pass
        });

        ssh
          .exec(command, {
            out: async function(stdout) {
              // await result.push(stdout);
              await console.log(stdout);
            }
          })
          .start();
      });
      await delay(1000);
      await console.log(colors.FgGreen, "Done", colors.Reset);
    })();
  });
};
