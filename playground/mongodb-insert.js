"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var TodoItem_1 = require("./TodoItem");
var mongoDbUri = 'mongodb://localhost:27017';
var mongoDbName = 'TodoApp';
mongodb_1.MongoClient.connect(mongoDbUri, function (error, client) {
    if (error) {
        console.log("Unable to connect to MongoDB server: " + mongoDbUri);
        return;
    }
    console.log("Connected to MongoDB server: " + mongoDbUri);
    var db = client.db(mongoDbName);
    // just for testing, insert a bunch of TodoItems with the same item id
    var todoItem = new TodoItem_1.TodoItem(null, 'Another todo');
    var ref = todoItem.ref;
    for (var i = 0; i < 10000; i++) {
        db.collection(TodoItem_1.TodoItem.collectionName).insertOne(todoItem, function (error, result) {
            if (error) {
                console.log('Unable to insert ToDoItem', error);
                return;
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });
        todoItem = new TodoItem_1.TodoItem(ref, "This is my to do version " + i);
    }
    // client.close();
});
