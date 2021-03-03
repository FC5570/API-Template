const jokes = require("../assets/JSON/jokes.json");

module.exports = {
  route: "/joke",
  run: async (req, res) => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    res.status(200).json({
      joke: `${random.setup}. ${random.punchline}`,
      type: random.type,
    });
  },
};
