const {writeFile} = require("node:fs");

writeFile("./10-method-callback/message.txt", "tua madre pt2", (e) => {
  if (e) console.log(e);
  else console.log("successfull");
});
