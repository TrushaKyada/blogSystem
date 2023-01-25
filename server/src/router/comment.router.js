const router = require('express').Router();
const {verify} = require("../middleware/auth");

const {
    insertComment,
    updateComment,
    viewComment,
    viewCommentByUser,
    totalcomment
} = require("../controller/comment.ctrl");

router.post("/add-comment/:id/:_id",verify,insertComment);
router.put("/edit/:id/:_id/:id1",verify,updateComment);
router.get("/view/:_id",viewComment);
router.get("/viewByUser/:id/:_id",verify,viewCommentByUser);
router.get("/total/:id/:_id",verify,totalcomment)


module.exports = router;