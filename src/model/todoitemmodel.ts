import { model } from 'mongoose';

import { todoItemSchema } from '../schemas/todoItem';

var todoItemModel = model('Todo', todoItemSchema);

export { todoItemModel }

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