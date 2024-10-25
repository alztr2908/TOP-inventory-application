const pool = require("./pool");

const getAllGame = async () => {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
};

module.exports = {
  getAllGame,
};
