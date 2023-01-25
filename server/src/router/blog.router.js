const router = require('express').Router();
const {verify} = require("../middleware/auth");
const adminvalidate = require("../validation/auth");
const {
    insertBlog,
    updateBlog,
    viewBlog,   
    viewBlogByUser,
    countBlogByUser,    
    totalblog1,
    viewBlogById,
    topviewBlog,
    insertImg,
    viewBlogbycategory
} = require("../controller/blog.ctrl")
const {
    insertLike
} = require("../controller/like.ctrl");
const multer = require("../middleware/multer")
router.post("/add-blog/:id",verify,insertBlog);
router.put("/edit-blog/:_id",verify,multer.array("blogimg"),updateBlog);
router.post("/img/add-blog/:id",verify,multer.array("blogimg"),insertImg);
router.get("/view",viewBlog);   
router.get("/view/top",topviewBlog);
router.get("/viewBlog/:id1",viewBlogById);                      
router.get("/viewbyuser/:id",verify,viewBlogByUser);
router.get("/user/total-blog/:id",verify,countBlogByUser);
router.get("/total-blog/:id",verify,totalblog1);
router.get("/like/:_id",verify,insertLike);
router.get("/",viewBlogbycategory);

module.exports = router;