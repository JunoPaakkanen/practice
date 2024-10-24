const fs = require("fs");

let text = fs.readFile("data.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(JSON.parse(data));
  (JSON.parse(data));
});

let AA = text.substr(26, 37);
let BB = text.substr(44, 45);
if(AA > BB){
  console.log("AA on suurempi")
}
if(AA < BB){
  console.log("BB on suurempi")
}