const Whitelist = require("../../models");

const getWhitelist = async (req, res, next) => {
  try {
    const {
      params: { discord_id },
    } = req;
    const whitelist = await Whitelist.findById({ _id: discord_id }).exec();

    if (whitelist) {
      res.status(200).json({ whitelist });
    } else {
      res.status(404).send("[404] : Whitelist not found!");
    }
  } catch (error) {
    next(error);
  }
};

const addWhitelist = async (req, res) => {
  try {
    const { body } = req;
    body["_id"] = body["discord_id"];
    delete body["discord_id"];
    const whitelist = new Whitelist(body);

    const newWhitelist = await whitelist.save();

    res.status(201).json(newWhitelist);
  } catch (error) {
    next(error);
  }
};

const updateWhitelist = async (req, res) => {
  try {
    const {
      params: { discord_id },
      body,
    } = req;

    const updatedWhitelist = await Whitelist.findByIdAndUpdate(
      { _id: discord_id },
      body
    );

    if (updatedWhitelist) {
      res.status(200).json({ updatedWhitelist });
    } else {
      res.status(404).send("[404] : Whitelist not found!");
    }
  } catch (error) {
    next(error);
  }
};

const deleteWhitelist = async (req, res) => {
  try {
    const {
      params: { discord_id },
    } = req;

    const deletedWhitelist = await Whitelist.findByIdAndDelete({
      _id: discord_id,
    });

    if (deletedWhitelist) {
      res.status(200).json({ deletedWhitelist });
    } else {
      res.status(404).send("[404] : Whitelist not found!");
    }
  } catch (error) {
    next(error);
  }
};

const getAllWhitelist = async (req, res, next) => {
  try {
    const whitelists = await Whitelist.find();
    res.status(200).json({ whitelists });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWhitelist,
  addWhitelist,
  updateWhitelist,
  deleteWhitelist,
  getAllWhitelist,
};
