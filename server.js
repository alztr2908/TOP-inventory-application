const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const gameRouter = require("./routes/gameRoute");
const devRouter = require("./routes/devRoute");
const genreRouter = require("./routes/genreRoute");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.use("/game", gameRouter);
app.use("/dev", devRouter);
app.use("/genre", genreRouter);

app.use("*", (req, res) => {
  res.render("pages/notFound");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`Listening to http://localhost:${PORT}`);
});
