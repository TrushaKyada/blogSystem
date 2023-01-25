const router = require('express').Router();
const {insert} = require("../controller/contactus.ctrl");
router.post('/',insert);
module.exports = router