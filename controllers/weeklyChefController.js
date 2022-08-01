const weeklyChefHandler = require("../handlers/weeklyChefHandler");

const changeWeeklyChef = async (req, res) => {
  try {
    const result = await weeklyChefHandler.changeWeeklyChef(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getWeeklyChef = async (req, res) => {
  try {
    const result = await weeklyChefHandler.getWeeklyChef();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getWeeklyChefRestaurants = async (req, res) => {
  try {
    const result = await weeklyChefHandler.getWeeklyChefRestaurants();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
    changeWeeklyChef,
    getWeeklyChef,
    getWeeklyChefRestaurants
};
