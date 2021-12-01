const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
  err
    ?`error `
    : list.forEach((el) =>
        path.extname(el) == `.${process.argv[3]}` ? console.log(el) : ""
      );
});