const express = require("express");
const mongoose = require("mongoose");
const { whitelistRoutes } = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(whitelistRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Endpoint not found on the server");
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An unexpected error occured in the server");
});

// MongoDB connection

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}...`);
});
