const fs = require("fs");

//Blocking == Syncr
//Read file
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//Write file
const textout = `This is what we know about the avocado ${textIn} created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textout);
console.log("File Written!");

//NonBlocking == Asyncr

fs.readFile("./txt/startttttt.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR!🔥");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, (err) => {
        console.log("Your file has been written☺️");
      });
    });
  });
});

console.log("Will read file!");
