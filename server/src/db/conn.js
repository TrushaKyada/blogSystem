const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogSystem")
    .then(() => {
        console.log("database connected successfully...");
    })
    .catch((err) => {
        console.log("database not connected");
    });