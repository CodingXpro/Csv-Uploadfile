
const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  age: {
    type: Number
  }
});



 
module.exports = mongoose.model('personaldata', csvSchema);