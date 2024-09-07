const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  sourceStationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SpaceStation",
    required: true,
  },
  destinationStationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SpaceStation",
    required: true,
  },
  goodsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Goods",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["initiated", "complted", "failed"],
    default: "inititated",
  },
  type: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },
});

module.exports = mongoose.model("Trade", tradeSchema);
