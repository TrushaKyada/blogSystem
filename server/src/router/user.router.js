const router = require('express').Router();
const {verify} = require("../middleware/auth");
const {validator}= require("../validation/validator");
const {
    userRegistration,
    userLogin,
    userProfile,
    updateProfile,  
    updatePassword,
    totalUser1,
    userList
} = require("../controller/user.ctrl");
const Joi = require('joi');

router.post("/registration",userRegistration);
router.post("/login",userLogin);
router.get("/view/:id",verify,userProfile);
router.put("/update/:id",verify,updateProfile);
router.put("/changePassword/:id",verify,updatePassword);
router.get("/total",verify,totalUser1);
router.get("/list",verify,userList);


module.exports = router;