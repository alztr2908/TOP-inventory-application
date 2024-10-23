const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const gameRouter = require("./routes/gameRoute");
const devRouter = require("./routes/devRoute");
const genreRouter = require("./routes/genreRoute");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/game", gameRouter);
app.use("/dev", devRouter);
app.use("/genre", genreRouter);

app.use("*", (req, res) => {
  res.render("notFound");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`Listening to http://localhost:${PORT}`);
});
