const { Router } = require("express");
const {
  getWhitelist,
  addWhitelist,
  updateWhitelist,
  deleteWhitelist,
  getAllWhitelist,
} = require("../controllers/whitelist");

const whitelistRoutes = Router();

whitelistRoutes.get("/whitelist", getAllWhitelist);
whitelistRoutes.get("/whitelist/:discord_id", getWhitelist);
whitelistRoutes.post("/whitelist", addWhitelist);
whitelistRoutes.put("/whitelist/:discord_id", updateWhitelist);
whitelistRoutes.delete("/whitelist/:discord_id", deleteWhitelist);

module.exports = whitelistRoutes;
