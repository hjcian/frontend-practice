const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream(path.join(__dirname, "dist", "index.html")).pipe(res);
});





app.use(router);

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
