// Setting AKA Configuration
const config = require("../settings");

// Packages Lol
const express = require("express");
const app = (module.exports = express());
const bot = require("./discord/bot");

// Import Routers
const indexRouter = require("./routes/index");
const dlRouter = require("./routes/dl");
const cdRouter = require("./routes/countdown");
const apiV1 = require("./routes/api/v1");
const apiV2 = require("./routes/api/v2");

// View Engine
app.set("views", "src/themes/" + config.web.themes);
app.set("view engine", "ejs");

// Static
app.use("/", express.static("public"));

// API
app.use("/api", apiV1);
app.use("/api/v2", apiV2);

// Pages
app.use("/", indexRouter);
app.use("/coming-soon", cdRouter)
app.use("/download", dlRouter);

// Error
app.use(function (req, res) {
  res.status(404);
  res.send({ error: "Sorry, can't find that" });
});

// Nothing
if (!module.parent) {
  app.listen(config.web.port);
  console.log(`Server started on port ${config.web.port}`);
}