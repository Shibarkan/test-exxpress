const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello express test"));

app.listen(8080, () => console.log("Server ready on port 3000."));

module.exports = app;