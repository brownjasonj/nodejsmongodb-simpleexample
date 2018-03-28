import {connect, Schema, model } from 'mongoose';
import { v4 as uuid} from 'uuid';

import { todoItemSchema } from '../schemas/todoItem';
import { UserSchema } from '../schemas/user';

const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbName = 'TodoApp';

require('mongoose').Promise = global.Promise;

connect(`${mongoDbUri}/${mongoDbName}`);

// var Todo = model('Todo', todoItemSchema);

// var newTodo = new Todo({
//     ref: uuid(),
//     text: 'Got for lunch',
//     completed: false
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (error) => {
//     console.log("Unable to save ToDo");
// });

var UserModel = model('User', UserSchema);

var newUser = new UserModel({
    email: "brownjasonj@gmail.com"
});

newUser.save().then((doc) => {
    console.log('Save user', doc);
}, (error) => {
    console.log('Unable to save User');
})