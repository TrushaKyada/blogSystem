const mongoose = require('mongoose');


const contact = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
    name: {
       type: String,
       required:true,
    },
    message:{
        type:String,
        required:true
    }
    
}, {
    timestamps: true
}, {
    collection: "contacts"
}
);

module.exports = mongoose.model("contacts", contact);