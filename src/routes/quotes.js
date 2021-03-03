const quotes = require("../assets/JSON/quotes.json");

module.exports = {
  route: "/quote",
  run: async (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json({
      quote: random.quote,
      author: random.author,
    });
  },
};
