const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({

  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
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
    enum: ["initiated", "completed", "failed"],
    default: "initiated",
  },
  type: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model("Trade", tradeSchema);
