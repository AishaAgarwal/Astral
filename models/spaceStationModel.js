const mongoose = require("mongoose");

const spaceStationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum : ['Active', 'Inactive'],
    default : 'Active'
  },
});

module.exports = mongoose.model("SpaceStation", spaceStationSchema);
