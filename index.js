const fs = require("fs");

//Read file
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//Write file
const textout = `This is what we know about the avocado ${textIn} created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textout);
console.log("File Written!");
