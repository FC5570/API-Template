const app = require("express")();
const fs = require("fs");
const config = require("./config");
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

fs.readdirSync("./src/routes").forEach((file) => {
    const endpoints = require(`./src/routes/${file}`)
    app.get(endpoints.route, endpoints.run);
});

app.use((req, res, next) => {
    res.status(404).json({
        code: 404,
        message: "that doesn\'t exist"
    });
});

app.listen(config.port, (err) => {
    if (err) throw err;
    console.log(`[API] Running on port ${config.port}`);
});
