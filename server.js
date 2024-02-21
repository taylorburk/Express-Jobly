"use strict";

const app = require("./app");
const { PORT } = require("./config");

// Start the server and listen on the specified 'PORT'.
app.listen(PORT, function () {
  // Print a message to the console indicating that the server has started.
  console.log(`Started on http://localhost:${PORT}`);
});
