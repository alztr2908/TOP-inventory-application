const db = require("../db/query");

const getAllGame = async (req, res) => {
  const games = await db.getAllGame();
  res.send(games);
};

const getSingleGame = (req, res) => {};

const getCreateGame = (req, res) => {};

module.exports = {
  getAllGame,
  getSingleGame,
  getCreateGame,
};
