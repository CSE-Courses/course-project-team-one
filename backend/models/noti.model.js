  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notiSchema = new Schema({

  classes : { type : Array , "default" : []},
  deadline:{type: Date}

}, {
  timestamps: true,
});

const Noti = mongoose.model('Noti', notiSchema);

module.exports = Noti;