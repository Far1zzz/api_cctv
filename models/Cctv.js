const mongoose = require("mongoose");

const schemaCctv = mongoose.Schema({
  lokasi: {
    type: String,
    require: true,
  },
  url_media: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cctv", schemaCctv);
