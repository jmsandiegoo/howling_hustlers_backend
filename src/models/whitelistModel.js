const { model, Schema } = require("mongoose");

const whitelistSchema = new Schema(
  {
    discordId: {
      type: String,
      required: true,
    },
    wallets: [{ wallet: String }],
  },
  { timestamps: true }
);

module.exports = model("Whitelist", whitelistSchema);
