"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoDbUri = 'mongodb://localhost:27017';
var mongoDbName = 'TodoApp';
require('mongoose').Promise = global.Promise;
mongoose_1.connect(mongoDbUri + "/" + mongoDbName);
var Todo = mongoose_1.model('Todo', new mongoose_1.Schema({
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
}));
var newTodo = new Todo({
    text: 'Cook Dinner'
});
newTodo.save().then(function (doc) {
    console.log('Saved todo', doc);
}, function (error) {
    console.log("Unable to save ToDo");
});
