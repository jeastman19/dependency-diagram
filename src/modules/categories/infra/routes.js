const express = require("express");
const {
    getAllCategories,
    getCategory,
    createCategory,
} = require("./controllers");

const routes = express();

routes.get("/get", getAllCategories);
routes.get("/get/:id", getCategory);
routes.post("/create", createCategory);

module.exports = routes;
