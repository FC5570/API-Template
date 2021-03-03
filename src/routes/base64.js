module.exports = {
  route: "/base64",
  run: async (req, res) => {
    const type = req.query.type;
    if (!type)
      return res.status(400).json({
        code: 400,
        message: "Specify a type (encode or decode)",
      });
    if (type.toLowerCase() === "encode") {
      const text = req.query.text;
      if (!text)
        return res.status(400).json({
          code: 400,
          message: "Specify the text to encode.",
        });
      return res.status(200).json({
        encoded: Buffer.from(text).toString("base64"),
      });
    } else if (type.toLowerCase() === "decode") {
      const text = req.query.text;
      if (!text)
        return res.status(400).json({
          code: 400,
          message: "Specify the text to encode.",
        });
      return res.status(200).json({
        encoded: Buffer.from(text, "base64").toString("ascii"),
      });
    }
  },
};
