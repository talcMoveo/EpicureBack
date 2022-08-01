const weeklyChefModel = require("../schemes/weeklyChefScheme").WeeklyChefModel;

const changeWeeklyChef = async (newChef) => {
    return await weeklyChefModel.findOneAndReplace({}, newChef);
};

const getWeeklyChef = async () => {
    return await chefOfTheWeekModel.find().populate("chefRef");
};

const getWeeklyChefRestaurants = async () => {
    return await chefOfTheWeekModel.aggregate([
        {
          $lookup: {
            from: "chefs",
            localField: "chefRef",
            foreignField: "_id",
            as: "chef",
          },
        },
        {
          $unwind: {
            path: "$chef",
          },
        },
        {
          $lookup: {
            from: "restaurants",
            localField: "chefRef._id",
            foreignField: "chefRef",
            as: "restaurants",
          },
        },
        {
          $unwind: {
            path: "$restaurants",
          },
        },
      ]);
};


module.exports = {
    changeWeeklyChef,
    getWeeklyChef,
    getWeeklyChefRestaurants
};