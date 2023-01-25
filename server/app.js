const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const conn = require('./src/db/conn.js');

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static('./src/public'));
app.use('/image',express.static('image'));

// --- Web Routes --- //
const userRouter = require("./src/router/user.router");
const blogRouter = require('./src/router/blog.router');
const commentRouter = require('./src/router/comment.router');
const documentRouter = require('./src/router/document.router');
const contactRouter = require('./src/router/contactus.router');
app.use("/user", userRouter);
app.use('/blog',blogRouter );
app.use('/comment',commentRouter);
app.use('/profile',documentRouter);
app.use("/contact",contactRouter);

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})