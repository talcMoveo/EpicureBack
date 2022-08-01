const weeklyChefRouter = require("express").Router();
const weeklyChefController = require("../controllers/weeklyChefController");

weeklyChefRouter.get("/", weeklyChefController.getWeeklyChef);
weeklyChefRouter.get("/res", weeklyChefController.getWeeklyChefRestaurants);
weeklyChefRouter.patch("/", weeklyChefController.changeWeeklyChef);

module.exports = { weeklyChefRouter };
