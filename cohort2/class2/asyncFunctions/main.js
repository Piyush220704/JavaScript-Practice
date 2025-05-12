
import fs from "fs";
fs.readFile("a.txt", "utf-8", (error, data)=>{
  console.log(data);
})