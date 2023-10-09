const { Router } = require("express");

const postDate = require("../handlers/Dates/postDate");
const getDates = require("../handlers/Dates/getDates");
const deleteDateHandler = require("../handlers/Dates/deleteDate");

const datesRouter = Router();

datesRouter.post("/", postDate);
datesRouter.get("/", getDates);
datesRouter.delete("/", deleteDateHandler);

module.exports = datesRouter;
