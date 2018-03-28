import {connect, Schema, model } from 'mongoose';

const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbName = 'TodoApp';

require('mongoose').Promise = global.Promise;

connect(`${mongoDbUri}/${mongoDbName}`);

var Todo = model('Todo', new Schema({
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

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (error) => {
    console.log("Unable to save ToDo");
});