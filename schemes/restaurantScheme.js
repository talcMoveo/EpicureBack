const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
  },
  chefRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chefs",
  },
  active: {
    type: Boolean,
    default: true,
  },
  popular: {
    type: Boolean,
    default: false,
  },
  signatureDish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "dishes",
  }
});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = { RestaurantModel };
