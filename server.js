const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Webserver");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to http://localhost:${PORT}`);
});
