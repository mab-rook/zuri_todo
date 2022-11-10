var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/Zuri_myTodo');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");