const express = require("express");
const app = (module.exports = express());

// Setting AKA Config
const config = require("../settings");

// if (config.mode === "production") {
//   console.log("\u001b[31;1m┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
//   console.log("\u001b[31;1m┃\u001b[33;1m Copyright (c) 2018-2022 Neppixel. All rights reserved.\u001b[31;1m┃");
//   console.group("\u001b[31;1m┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\u001b[0m");
// } else {
//   console.log( "\u001b[31;1m┏━━━━━━━━━━━━━━━━━━━ DEVELOPMENT MODE ━━━━━━━━━━━━━━━━━━┓");
//   console.log("\u001b[31;1m┃\u001b[33;1m Copyright (c) 2018-2022 Neppixel. All rights reserved.\u001b[31;1m┃");
//   console.group("\x1b[31m┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\u001b[0m");
// }

// Import Routers
const indexRouter = require("./routes/index");
const dlRouter = require("./routes/dl");
const apiV1 = require("./routes/api/v1");
const apiV2 = require("./routes/api/v2");

// View Engine
app.set("views", "src/views");
app.set("view engine", "ejs");

// Static
app.use("/", express.static("public"));

// API
app.use("/api", apiV1);
app.use("/api/v2", apiV2);

// Pages
app.use("/", indexRouter);
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
