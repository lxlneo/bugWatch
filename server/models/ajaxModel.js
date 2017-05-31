const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ajaxSchema = new Schema({
  projectId: {
    type: String,
    required: true
  },
  errorPage:  {
    type: String,
    required: true
  },
  url: String,
  message: String,
  error: String,
  ua: String, // 报错页面的user-agent
  time: { // 报错的时间
    type: Date,
    default: Date.now,
  },
});
const ajaxModel = mongoose.model('Ajax', ajaxSchema);

module.exports = ajaxModel;
