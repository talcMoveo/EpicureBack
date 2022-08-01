const express = require("express");
const v1Router = express.Router();

const chefsRouter = require("./chefsRouter").chefsRouter;
const restaurantsRouter = require("./restaurantsRouter").restaurantsRouter;
const dishesRouter = require("./dishesRouter").dishesRouter;
const searchRouter = require("./searchRouter").searchRouter;
const weeklyChefRouter = require("./weeklyChefRouter").weeklyChefRouter;

v1Router.use("/chefs", chefsRouter);
v1Router.use("/restaurants", restaurantsRouter);
v1Router.use("/dishes", dishesRouter);
v1Router.use("/search", searchRouter);
v1Router.use("/weeklyChef", weeklyChefRouter);

module.exports = { v1Router };
