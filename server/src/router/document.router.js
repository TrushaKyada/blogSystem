const multer = require("../middleware/multer");
const route = require("express").Router();
const {register, viewDocument} = require("../controller/document.ctrl");
const {verify} =require("../middleware/auth")

route.post("/:id",multer.array('profile'),register);
route.get("/:id",verify,viewDocument);

module.exports = route;