"use strict";
const express_1 = require("express");
const Controller_1 = require("../Controllers/Controller");

const router = (0, express_1.Router)();

router.post("/start", Controller_1.getNews);

// Additional routes can be added here
// router.post("/example", exampleHandler);

module.exports = router;
