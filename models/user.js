var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true, uniqe: true},
  email: {type: String, required: true},
  messages: [{type: Scema.Types.ObjectId, ref: 'Message'}]
});

scema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
