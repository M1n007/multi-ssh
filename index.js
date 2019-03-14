const readline = require("readline-sync");
const getIP = require("./lib/getIP");
const colors = require("./lib/colors");
const sshCom = require("./lib/sshCom");

console.log("");
console.log("");

console.log(
  colors.FgGreen,
  "Welcome to MULTI-SSH easy to MULTI Login and Multi Command",
  colors.Reset
);

console.log("");
console.log("");

const file = readline.question("Enter the file name of your IP list : ");
const pass = readline.question("Enter your SSH password : ");
const command = readline.question("input command for all ssh : ");

console.log("");
console.log("");

getIP(file).then(res => {
  sshCom(res, pass, command).then(resSSH => {
    console.log(resSSH);
  });
});
